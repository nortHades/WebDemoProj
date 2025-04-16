document.addEventListener('DOMContentLoaded', () => {

    const bannerImageElement = document.getElementById('banner');
    const bannerImageSources = [
        'images/headerBanner.png', 
        'images/headerBanner2.png',   
        'images/headerBanner3.png'  
    ];
    let currentBannerIndex = 0;
    const bannerIntervalTime = 5000; 

    if (bannerImageElement && bannerImageSources.length > 1) {
        setInterval(() => {
            currentBannerIndex = (currentBannerIndex + 1) % bannerImageSources.length; 
            bannerImageElement.src = bannerImageSources[currentBannerIndex]; 
        }, bannerIntervalTime);
    }

    //
    const subscribeForm = document.querySelector('#involved form'); // 选中订阅表单
    const emailInput = document.getElementById('email'); // 选中 email 输入框

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(event) {
            event.preventDefault();

            
            if (emailInput.value.trim() === '') {
                alert('Please enter your email address.');
                return; 
            }

            
            alert('Subscription successful! Thank you.');

        
            emailInput.value = '';
        });
    }
});
