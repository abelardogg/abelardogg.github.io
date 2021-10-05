(function(){
    const mobileNavSwitch =  document.getElementById('nav-switch');
    const mobileNavSections =  document.getElementById('nav-sections');
    const mobileNavBackdrop =  document.getElementById('nav-backdrop');

    mobileNavSwitch.addEventListener('click', function(e){
        openNav();
    });

    mobileNavBackdrop.addEventListener('click', function(e){
        closeNav();
    });

    function openNav(){
        $(mobileNavSwitch).addClass('open');
        $(mobileNavSections).addClass('open');
        $(mobileNavBackdrop).addClass('open');
    }

    function closeNav(){
        $(mobileNavSwitch).removeClass('open');
        $(mobileNavSections).removeClass('open');
        $(mobileNavBackdrop).removeClass('open');
    }

})();