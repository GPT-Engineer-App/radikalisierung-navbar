<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Islamic Radicalization Awareness</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            perspective: 1000px;
        }
        .scroll-section {
            transform-style: preserve-3d;
            transition: transform 1s;
        }
        .scroll-section div {
            backface-visibility: hidden;
        }
    </style>
</head>
<body class="bg-gray-100 text-gray-900">
    <nav class="bg-blue-800 text-white p-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <a href="#" class="text-2xl font-bold">Islamic Radicalization Awareness</a>
            <div class="space-x-4">
                <a href="#" class="hover:underline">Home</a>
                <a href="#" class="hover:underline">Video</a>
                <a href="#" class="hover:underline">Quiz</a>
                <a href="#" class="hover:underline">Chatbot</a>
            </div>
        </div>
    </nav>
    <div class="scroll-section">
        <div class="min-h-screen flex items-center justify-center bg-green-200">
            <h1 class="text-4xl font-bold">Welcome to Islamic Radicalization Awareness</h1>
        </div>
        <div class="min-h-screen flex items-center justify-center bg-green-300">
            <h1 class="text-4xl font-bold">Understanding the Issue</h1>
        </div>
        <div class="min-h-screen flex items-center justify-center bg-green-400">
            <h1 class="text-4xl font-bold">Preventive Measures</h1>
        </div>
    </div>
    <script>
        window.addEventListener('scroll', () => {
            const scrollSection = document.querySelector('.scroll-section');
            const scrollPosition = window.scrollY;
            scrollSection.style.transform = `rotateX(${scrollPosition / 10}deg)`;
        });
    </script>
</body>
</html>