<template>
    <Container class="h-screen w-full gap-24 flex justify-center items-center">
        
        <iframe class="w-1/2 h-full rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.53244632235!2d-115.33981016095255!3d36.12488712360267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20Nevada%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sbe!4v1703864825336!5m2!1sfr!2sbe" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>

        <form class="w-1/2 font-sans">
        
        <div class="mb-5">
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Nom</label>
            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Nom">
        </div>

        <div class="mb-5">
            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Email</label>
            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Email">
        </div>

        <div class="mb-5">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Message</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Laisser nous un message..."></textarea>
            </div>

            <a href="#">
                <BoutonsPrimaire class="gap-2">
                    Envoyer <i class="ri-send-plane-2-fill"></i>
                </BoutonsPrimaire>
            </a>

        </form>

    </Container>
</template>