$(document).ready(function () {
//hide all the featured inventory
    $('#rgFeaturedBtn').on('click', function () {
        $('#rgFeatured').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');
    });

//hide all the dice inventory
    $('#rgDiceBtn').on('click', function () {
        $('#rgDice').removeClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');

    });

//hide all the sleeves inventory
    $('#rgSleevesBtn').on('click', function () {
        $('#rgSleeves').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');

    });

//hide all the deck box inventory
    $('#rgDeckBoxBtn').on('click', function () {
        $('#rgDeckBox').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');

    });

//hide all the comic supplies inventory
    $('#rgComSupBtn').on('click', function () {
        $('#rgComSup').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');

    });

    $('#rgFullBtn').on('click', function () {
        $('#rgFull').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');

    });

    $('#rgComBtn').on('click', function () {
        $('#rgComics').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');
    });

    $('#rgBGamesBtn').on('click', function () {
        $('#rgBoardGames').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');
    });

    $('#rgDropBtn').on('click', function () {
        $('#rgDrop').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgMini').addClass('hide');
    });

    $('#rgMiniBtn').on('click', function () {
        $('#rgMini').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
    });


    //mobile buttons
    $('#rgFeaturedBtnM').on('click', function () {
        $('#rgFeatured').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');
        $('#navList').addClass('hide');

    });

//hide all the dice inventory
    $('#rgDiceBtnM').on('click', function () {
        $('#rgDice').removeClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');
        $('#navList').addClass('hide');
    });

//hide all the sleeves inventory
    $('#rgSleevesBtnM').on('click', function () {
        $('#rgSleeves').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');
        $('#navList').addClass('hide');


    });

//hide all the deck box inventory
    $('#rgDeckBoxBtnM').on('click', function () {
        $('#rgDeckBox').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');
        $('#navList').addClass('hide');


    });

//hide all the comic supplies inventory
    $('#rgComSupBtnM').on('click', function () {
        $('#rgComSup').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');
        $('#navList').addClass('hide');


    });

    $('#rgFullBtnM').on('click', function () {
        $('#rgFull').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');
        $('#navList').addClass('hide');


    });

    $('#rgComBtnM').on('click', function () {
        $('#rgComics').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');
        $('#navList').addClass('hide');

    });

    $('#rgBGamesBtnM').on('click', function () {
        $('#rgBoardGames').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#rgMini').addClass('hide');
        $('#navList').addClass('hide');

    });

    $('#rgDropBtnM').on('click', function () {
        $('#rgDrop').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgMini').addClass('hide');
        $('#navList').addClass('hide');

    });

    $('#rgMiniBtnM').on('click', function () {
        $('#rgMini').removeClass('hide');
        $('#rgDice').addClass('hide');
        $('#rgSleeves').addClass('hide');
        $('#rgDeckBox').addClass('hide');
        $('#rgFeatured').addClass('hide');
        $('#rgComSup').addClass('hide');
        $('#rgFull').addClass('hide');
        $('#rgComics').addClass('hide');
        $('#rgBoardGames').addClass('hide');
        $('#rgDrop').addClass('hide');
        $('#navList').addClass('hide');
    });

    $('#navDropDown').on('click', function(){
        $('#navList').toggleClass('hide');
    });

    function waitForShopRocket(callback) {
        setTimeout(function () {
            if ($('#sr-cartmodal').length) {
                isLoaded = false;
                callback();
            }
            else {
                isLoaded = true;
                waitForShopRocket(callback);
            }
        }, 50)
    }

    waitForShopRocket(function () {
        if (isLoaded !== true) {
            $('#productSingle').addClass('loader');
        } else {
            $('#productSingle').removeClass('loader');


        }
    });




    function fadeInLore(){
        $('#lore').removeClass("hide");
        $('#lore').addClass("animated fadeIn");
    }
    setTimeout(fadeInLore, 1500);

    function fadeInLore1(){
        $('#lore1').removeClass("hide");
        $('#lore1').addClass("animated fadeIn");
    }
    setTimeout(fadeInLore1, 3000);

});
