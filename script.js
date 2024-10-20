window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 4000);
});

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            
            navbar.style.top = "-80px";
            navbar.style.top = "0";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    let currentIndex = 0;
    const images = document.querySelectorAll('.hero-images img');
    
    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }
    
    setInterval(showNextImage, 5000);
    
    var document = document;
    $(document).ready(function () {
        const text = "Expert Guidance, ";
        const changingWords = [
            "Trusted Results.",
            "Client Satisfaction.",
            "Guaranteed Success.",
            "Proven Results.",
            "Legal Solutions.",
        ];
        let textIndex = 0;
        let wordIndex = 0;
        let charIndex = 0;
        const typingSpeed = 75;
        const changingSpeed = 50;
        const pauseBetweenWords = 2500;
        const pauseAfterTyping = 1000;
    
        function typeWriter() {
            if (textIndex < text.length) {
                $('.typewriter-text').append(text.charAt(textIndex));
                textIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(changeWord, pauseAfterTyping);
            }
        }
    
        function changeWord() {
            if (charIndex < changingWords[wordIndex].length) {
                $('.changing-word').append(changingWords[wordIndex].charAt(charIndex));
                charIndex++;
                setTimeout(changeWord, changingSpeed);
            } else {
                setTimeout(clearWord, pauseBetweenWords);
            }
        }
    
        function clearWord() {
            if (charIndex > 0) {
                $('.changing-word').text(changingWords[wordIndex].substring(0, charIndex - 1));
                charIndex--;
                setTimeout(clearWord, changingSpeed);
            } else {
                wordIndex = (wordIndex + 1) % changingWords.length;
                setTimeout(changeWord, changingSpeed);
            }
        }
    
        
        typeWriter();
    });
    
    $(document).ready(function () {
        const targets = {
            happyClients: 300,
            projectsCompleted: 75,
            expertTeamMembers: 20,
            clientSatisfaction: 95
        };
    
        let hasAnimated = false;
    
        function animateCounter(id, target, duration) {
            let start = 0;
            const stepTime = Math.abs(Math.floor(duration / target));
    
            const counter = setInterval(function () {
                start += 1;
                document.getElementById(id).innerText = start;
    
                if (start >= target) {
                    clearInterval(counter);
                }
            }, stepTime);
        }
    
        function checkIfInView() {
            const statsSection = document.getElementById("stats");
            const rect = statsSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
    
            if (rect.top < windowHeight && rect.bottom >= 0 && !hasAnimated) {
                hasAnimated = true;
                animateCounter("happyClients", targets.happyClients, 3000);
                animateCounter("projectsCompleted", targets.projectsCompleted, 3000);
                animateCounter("expertTeamMembers", targets.expertTeamMembers, 3000);
                animateCounter("clientSatisfaction", targets.clientSatisfaction, 3000);
            }
        }
    
        $(window).on("scroll", function () {
            checkIfInView();
        });
    
        checkIfInView();
    });
    
    $(document).ready(function () {
        const modal = $('#videoModal');
        const videoPlayer = $('#videoPlayer');
        const playButton = $('.play-button');
        const closeModal = $('.close');
    
        // URL of the video to play
        const videoUrl = 'https://youtu.be/12ZkgiRZabk?si=d_xcuqusivpsr-1q'; // Replace with your video link
    
        // When play button is clicked, open the modal and load the video
        playButton.on('click', function () {
            modal.show();
            videoPlayer.attr('src', videoUrl);
        });
    
        // When the close button is clicked, close the modal and stop the video
        closeModal.on('click', function () {
            modal.hide();
            videoPlayer.attr('src', ''); // Stop the video
        });
    
        // Close the modal if clicking outside the modal content
        $(window).on('click', function (event) {
            if (event.target.id === 'videoModal') {
                modal.hide();
                videoPlayer.attr('src', ''); // Stop the video
            }
        });
    });
    
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const arrowIcon = button.querySelector('.arrow-icon');
    
            // Toggle the display of the answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                arrowIcon.classList.remove('rotate');
            } else {
                answer.style.display = 'block';
                arrowIcon.classList.add('rotate');
            }
        });
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        const points = 100;  // Example points, you can update it with real data later
        const rewardPoints = document.getElementById('reward-points');

        // Increment points dynamically
        setInterval(() => {
          rewardPoints.innerText = points + Math.floor(Math.random() * 10); // Increment points randomly
        }, 5000);  // Update points every 5 seconds for demo purposes
    });