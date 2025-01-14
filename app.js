class MandarinGame {
    constructor(mandarinData) {
        this.mandarinData = mandarinData;
        this.currentWord = null;
        this.correctEnglish = null;
        this.selectedEnglish = new Set();
        
        this.wordElement = document.getElementById('currentKanji');
        this.readingsElement = document.getElementById('readings');
        this.successIndicator = document.getElementById('success-indicator');
        this.themeToggle = document.getElementById('themeToggle');
        this.translationToggle = document.getElementById('toggleTranslation');
        this.infoButton = document.getElementById('infoButton');
        this.popup = document.getElementById('wordListPopup');
        this.closePopupButton = document.getElementById('closePopup');

        // Footer copyright
        const currentYear = new Date().getFullYear();
        const copyrightYear = document.getElementById('copyright-year');
        copyrightYear.textContent = currentYear > 2025 ? `2025-${currentYear}` : '2025';
        
        this.initializeEventListeners();
        this.initializeWordList();
        this.showNextWord();

        // Add ARIA attributes
        this.wordElement.setAttribute('role', 'region');
        this.wordElement.setAttribute('aria-label', 'Current Chinese character');
        this.readingsElement.setAttribute('role', 'group');
        this.readingsElement.setAttribute('aria-label', 'English meaning options');
    }

    initializeEventListeners() {
        this.themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            this.themeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
        });

        this.translationToggle.addEventListener('click', () => {
            const translationElement = document.getElementById('translation');
            const isCurrentlyHidden = translationElement.classList.contains('hidden');
            translationElement.classList.toggle('hidden');
            
            // Play the word when showing pronunciations
            if (isCurrentlyHidden) {
                this.playWord();
            }
        });

        // Add popup event listeners
        this.infoButton.addEventListener('click', () => {
            this.popup.classList.remove('hidden');
        });

        this.closePopupButton.addEventListener('click', () => {
            this.popup.classList.add('hidden');
        });

        // Close popup when clicking outside
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.popup.classList.add('hidden');
            }
        });

        // Close popup with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.popup.classList.contains('hidden')) {
                this.popup.classList.add('hidden');
            }
        });
    }

    initializeWordList() {
        const wordListContainer = document.getElementById('wordList');
        const totalWords = this.mandarinData.length;
        
        // Add word stats
        const statsDiv = document.createElement('div');
        statsDiv.className = 'word-stats';
        statsDiv.textContent = `Total Words: ${totalWords}`;
        wordListContainer.appendChild(statsDiv);
        
        this.mandarinData.forEach((word, index) => {
            const wordItem = document.createElement('div');
            wordItem.className = 'word-item';
            
            const numberDiv = document.createElement('div');
            numberDiv.className = 'word-number';
            numberDiv.textContent = `${index + 1}.`;
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'word-content';
            
            const hanzi = document.createElement('div');
            hanzi.className = 'hanzi';
            hanzi.textContent = word.hanzi;
            
            const english = document.createElement('div');
            english.className = 'english';
            english.textContent = word.en;
            
            contentDiv.appendChild(hanzi);
            contentDiv.appendChild(english);
            
            wordItem.appendChild(numberDiv);
            wordItem.appendChild(contentDiv);
            wordListContainer.appendChild(wordItem);
        });
    }

    getRandomWord() {
        return this.mandarinData[Math.floor(Math.random() * this.mandarinData.length)];
    }

    getAllPossibleEnglish() {
        return this.mandarinData.reduce((acc, word) => {
            acc.add(word.en);
            return acc;
        }, new Set());
    }

    getWrongEnglish(count) {
        const allEnglish = Array.from(this.getAllPossibleEnglish())
            .filter(en => en !== this.currentWord.en);
        const shuffled = allEnglish.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    async showNextWord() {
        // Reset all reading option scales
        const readingOptions = document.querySelectorAll('.reading-option span');
        readingOptions.forEach(span => {
            span.style.transform = 'scale(1)';
        });

        const previousWord = this.currentWord;
        this.currentWord = this.getRandomWord();
        this.correctEnglish = this.currentWord.en;
        this.selectedEnglish = new Set();
        
        // Animate out current word
        if (previousWord) {
            this.wordElement.classList.add('kanji-exit');
            await new Promise(r => setTimeout(r, 300));
        }

        // Update content
        this.wordElement.textContent = this.currentWord.hanzi;
        const translationElement = document.getElementById('translation');
        translationElement.textContent = this.currentWord.pinyin.join(', ');
        this.wordElement.setAttribute('aria-label', 
            `Current character: ${this.currentWord.hanzi}`);
        
        this.successIndicator.classList.add('hidden');
        
        this.displayEnglishOptions();

        // Animate in new word
        this.wordElement.classList.add('kanji-enter');
        requestAnimationFrame(() => {
            this.wordElement.classList.remove('kanji-exit', 'kanji-enter');
        });
    }

    displayEnglishOptions() {
        const allEnglish = [
            this.currentWord.en,
            ...this.getWrongEnglish(3)
        ].sort(() => 0.5 - Math.random());
    
        this.readingsElement.innerHTML = '';
        
        allEnglish.forEach(english => {
            const button = document.createElement('button');
            button.className = 'reading-option';
            
            const textSpan = document.createElement('span');
            textSpan.textContent = english;
            textSpan.style.display = 'inline-block';
            textSpan.style.transition = 'transform 0.3s ease';
            button.appendChild(textSpan);
            
            button.setAttribute('role', 'button');
            button.setAttribute('aria-label', `Meaning: ${english}`);
            
            button.addEventListener('click', () => 
                this.handleEnglishSelection(button, english));
            
            this.readingsElement.appendChild(button);
        });
    }

    async playWord() {
        if (!window.speechSynthesis) {
            console.error('Speech synthesis not supported');
            return;
        }

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(this.currentWord.hanzi);
        utterance.lang = 'zh-CN';
        
        // Optimize voice settings for better quality
        utterance.rate = 0.8;     // Slower for clarity
        utterance.pitch = 1.0;    // Natural pitch
        utterance.volume = 1.0;   // Full volume

        // Get the best available Chinese voice
        const chineseVoice = window.speechSynthesis.getVoices().find(voice =>
            voice.lang.includes('zh')
        );

        if (chineseVoice) {
            utterance.voice = chineseVoice;
        }

        // Create a promise to handle the speech completion
        return new Promise((resolve) => {
            utterance.onend = () => resolve();
            utterance.onerror = () => resolve();
            window.speechSynthesis.speak(utterance);
        });
    }

    handleReadingSelection(button, reading) {
        if (button.classList.contains('disabled')) return;

        this.playReading(reading);

        const showAnnouncement = (message, isCorrect) => {
            const announcement = document.createElement('div');
            announcement.className = `announcement ${isCorrect ? 'correct' : 'incorrect'}`;
            announcement.setAttribute('role', 'alert');
            announcement.textContent = message;
            document.body.appendChild(announcement);
            
            // Remove the announcement after animation
            announcement.addEventListener('animationend', (e) => {
                if (e.animationName === 'fadeOut') {
                    announcement.remove();
                }
            });
        };

        if (this.correctReadings.has(reading)) {
            button.classList.add('correct', 'disabled');
            button.setAttribute('aria-disabled', 'true');
            button.setAttribute('aria-pressed', 'true');
            this.selectedReadings.add(reading);
            
            showAnnouncement('Correct reading!', true);

            if (this.selectedReadings.size === this.correctReadings.size) {
                this.successIndicator.classList.remove('hidden');
                this.successIndicator.classList.add('visible');
                this.successIndicator.setAttribute('role', 'alert');
                this.successIndicator.setAttribute('aria-label', 'Correct! Moving to next kanji');
                setTimeout(() => {
                    this.successIndicator.classList.remove('visible');
                    this.showNextKanji();
                }, 1000);
            }
        } else {
            button.classList.add('incorrect');
            button.addEventListener('animationend', () => {
                button.classList.remove('incorrect');
            }, { once: true });
            
            showAnnouncement('Incorrect reading, try again', false);
        }
    }

    handleTranslationSelection(button, translation) {
        if (button.classList.contains('disabled')) return;

        // Play the Chinese character when showing pronunciations
        if (translation === this.currentWord.en) {
            this.playWord();
        }

        const showAnnouncement = (message, isCorrect) => {
            const announcement = document.createElement('div');
            announcement.className = `announcement ${isCorrect ? 'correct' : 'incorrect'}`;
            announcement.setAttribute('role', 'alert');
            announcement.textContent = message;
            document.body.appendChild(announcement);
            
            announcement.addEventListener('animationend', (e) => {
                if (e.animationName === 'fadeOut') {
                    announcement.remove();
                }
            });
        };

        if (translation === this.currentWord.en) {
            button.classList.add('correct', 'disabled');
            button.setAttribute('aria-disabled', 'true');
            button.setAttribute('aria-pressed', 'true');
            
            showAnnouncement('Correct translation!', true);

            setTimeout(() => {
                this.successIndicator.classList.remove('hidden');
                this.successIndicator.classList.add('visible');
                this.successIndicator.setAttribute('role', 'alert');
                this.successIndicator.setAttribute('aria-label', 'Correct! Moving to next word');
                setTimeout(() => {
                    this.successIndicator.classList.remove('visible');
                    this.showNextWord();
                }, 1000);
            }, 500);
        } else {
            button.classList.add('incorrect');
            button.addEventListener('animationend', () => {
                button.classList.remove('incorrect');
            }, { once: true });
            
            showAnnouncement('Incorrect translation, try again', false);
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MandarinGame(mandarinData);
});