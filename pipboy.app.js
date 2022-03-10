$(document).ready(function(){
    var weapons = [

        /* handguns */

        {
            "name": "44_pistol",
            "wname": ".44 pistol",
            "damage": 48,
            "magazine": 6,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99,
            "image": "<img  src=\"./handguns/44_pistol.png\" width=\"400\" height=\"184\" />"
        },
        {
            "name": "10mm_pistol",
            "wname": "10mm pistol",
            "damage": 18,
            "magazine": 12,
            "fire_rate": 46,
            "range": 83,
            "accuracy": 60,
            "weight": 3.5,
            "value": 50,
            "image": "<img  src=\"./handguns/10mm_pistol.png\" width=\"400\" height=\"242\" />"
        },
        {
            "name": "eddies_peace",
            "wname": "Eddie's Peace",
            "damage": 48,
            "magazine": 6,
            "fire_rate": 6,
            "range": 125,
            "accuracy": 81,
            "weight": 5,
            "value": 454,
            "image": "<img  src=\"./handguns/Eddies_Peace.png\" width=\"400\" height=\"354\" />"
        },
        {
            "name": "flare_gun",
            "wname": "Flare Gun",
            "damage": 10,
            "magazine": 1,
            "fire_rate": 3,
            "range": 146,
            "accuracy": 74,
            "weight": 2,
            "value": 50,
            "image": "<img  src=\"./handguns/Flare_gun.png\" width=\"400\" height=\"260\" />"
        },
        {
            "name": "kelloggs_pistol",
            "wname": "Kellog's Pistol",
            "damage": 48,
            "magazine": 6,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 70,
            "weight": 4.3,
            "value": 449,
            "image": "<img  src=\"./handguns/Kelloggs_pistol.png\" width=\"400\" height=\"225\" />"
        },
        {
            "name": "diliverer",
            "wname": "The Deliverer",
            "damage": 25,
            "magazine": 12,
            "fire_rate": 66,
            "range": 53,
            "accuracy": 67,
            "weight": 4.4,
            "value": 774,
            "image": "<img  src=\"./handguns/The_Deliverer.png\" width=\"400\" height=\"152\" />"
        },
        {
            "name": "the_gainer",
            "wname": "The Gainer",
            "damage": 48,
            "magazine": 6,
            "fire_rate": 6,
            "range": 119,
            "accuracy": 74,
            "weight": 4.6,
            "value": 468,
            "image": "<img  src=\"./handguns/The_Gainer.png\" width=\"400\" height=\"236\" />"
        },
        {
            "name": "wastelanders_friend",
            "wname": "Wastelander's Friend",
            "damage": 27,
            "magazine": 24,
            "fire_rate": 46,
            "range": 107,
            "accuracy": 78,
            "weight": 7.3,
            "value": 772,
            "image": "<img  src=\"./handguns/wastelanders_friend.png\" width=\"400\" height=\"345\" />"
        },
        {
            "name": "western_revolver",
            "wname": "Western Revolver",
            "damage": 60,
            "magazine": 6,
            "fire_rate": 6,
            "range": 146,
            "accuracy": 66,
            "weight": 5.2,
            "value": 99,
            "image": "<img  src=\"./handguns/WesternPistol.png\" width=\"400\" height=\"234\" />"
        },

        /* rifles */

        {
            "name": "amr",
            "wname": "Anti-material Rifle",
            "damage": 50,
            "magazine": 3,
            "fire_rate": 2,
            "range": 119,
            "accuracy": 71,
            "weight": 12,
            "value": 55,
            "image": "<img  src=\"./rifles/amr.png\" width=\"400\" height=\"209\" />"
        },
        {
            "name": "ar",
            "wname": "Assault Rifle",
            "damage": 30,
            "magazine": 30,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144,
            "image": "<img  src=\"./rifles/ar.png\" width=\"400\" height=\"157\" />"
        },
        {
            "name": "gr",
            "wname": "Gauss Rifle",
            "damage": 110,
            "magazine": 7,
            "fire_rate": 66,
            "range": 191,
            "accuracy": 69,
            "weight": 15.8,
            "value": 228,
            "image": "<img  src=\"./rifles/gr.png\" width=\"400\" height=\"155\" />"
        },
        {
            "name": "tlm",
            "wname": "The Last Minute",
            "damage": 192,
            "magazine": 20,
            "fire_rate": 66,
            "range": 203,
            "accuracy": 112,
            "weight": 21.6,
            "value": 6500,
            "image": "<img  src=\"./rifles/tlm.png\" width=\"400\" height=\"142\" />"
        },
        {
            "name": "scn",
            "wname": "SplatterCannon",
            "damage": 51,
            "magazine": 75,
            "fire_rate": 113,
            "range": 89,
            "accuracy": 108,
            "weight": 23.6,
            "value": 6855,
            "image": "<img  src=\"./rifles/scn.png\" width=\"400\" height=\"132\" />"
        },
        {
            "name": "smg",
            "wname": "Sub Machine Gun",
            "damage": 10,
            "magazine": 50,
            "fire_rate": 127 ,
            "range": 109,
            "accuracy": 63,
            "weight": 12.7,
            "value": 109,
            "image": "<img  src=\"./rifles/smg.png\" width=\"400\" height=\"126\" />"
        },

        /* shotguns */

        {
            "name": "cs",
            "wname": "Combat Shotgun",
            "damage": 50,
            "magazine": 8,
            "fire_rate": 20,
            "range": 47,
            "accuracy": 23,
            "weight": 11.1,
            "value": 87,
            "image": "<img  src=\"./shotguns/cs.png\" width=\"400\" height=\"205\" />"
        },
        {
            "name": "justice",
            "wname": "Justice",
            "damage": 50,
            "magazine": 6,
            "fire_rate": 20,
            "range": 35,
            "accuracy": 28,
            "weight": 15.5,
            "value": 1076,
            "image": "<img  src=\"./shotguns/justice.png\" width=\"400\" height=\"113\" />"
        },
        {
            "name": "lft",
            "wname": "Le Fusil Terribles",
            "damage": 62,
            "magazine": 6,
            "fire_rate": 20,
            "range": 71,
            "accuracy": 29,
            "weight": 15.7,
            "value": 389,
            "image": "<img  src=\"./shotguns/lft.png\" width=\"400\" height=\"142\" />"
        },
        {
            "name": "dbs",
            "wname": "Double Barrel Shotgun",
            "damage": 45,
            "magazine": 2,
            "fire_rate": 36,
            "range": 47,
            "accuracy": 16,
            "weight": 9,
            "value": 39,
            "image": "<img  src=\"./shotguns/dbs.png\" width=\"400\" height=\"116\" />"
        },

        /* heavy weapons */ 

        {
            "name": "fm",
            "wname": "Fat Man",
            "damage": 468,
            "magazine": 1,
            "fire_rate": 1,
            "range": 117,
            "accuracy": 63,
            "weight": 30.7,
            "value": 512,
            "image": "<img  src=\"./heavy/fm.png\" width=\"400\" height=\"136\" />"
        },
        {
            "name": "bb",
            "wname": "Big Boy",
            "damage": 468,
            "magazine": 1,
            "fire_rate": 1,
            "range": 117,
            "accuracy": 39,
            "weight": 30.7,
            "value": 12405,
            "image": "<img  src=\"./heavy/bb.png\" width=\"400\" height=\"136\" />"
        },
        {
            "name": "dfa",
            "wname": "Death From Above",
            "damage": 151,
            "magazine": 2,
            "fire_rate": 2,
            "range": 203,
            "accuracy": 65,
            "weight": 21,
            "value": 4479,
            "image": "<img  src=\"./heavy/dfa.png\" width=\"400\" height=\"148\" />"
        },
        {
            "name": "nnl",
            "wname": "Nuka-Nuke Launcher",
            "damage": 794,
            "magazine": 1,
            "fire_rate": 1,
            "range": 117,
            "accuracy": 63,
            "weight": 36,
            "value": 6500,
            "image": "<img  src=\"./heavy/nnl.png\" width=\"400\" height=\"160\" />"
        }

    ]


    var armor =
    [
        {
            "name": "rpa",
            "armname": "Raider Power Armor",
            "defence": 48,
            "ud": 20,
            "value": 400,
            "image": "<img src=\"./armour/Raider_Power_Armor.png\" width=\"500\" height=\"425\" />"
        },
        {
            "name": "x01pa",
            "armname": "X-01 Power Armor",
            "defence": 100,
            "ud": 55,
            "value": 1011,
            "image": "<img src=\"./armour/X-01_Power_Armor.png\" width=\"500\" height=\"409\" />"
        },
        {
            "name": "t51pa",
            "armname": "T-51 Power Armor",
            "defence": 65,
            "ud": 30,
            "value": 500,
            "image": "<img src=\"./armour/t_51 power armor.png\" width=\"500\" height=\"409\" />"
        }
    ]



    $('[data-trigger="dropdown"]').on('click',function(){
		var submenu = $(this).parent().find('.submenu')
		submenu.fadeIn(001)
	})

    $('.handgun').on('mouseleave',function() {
		var submenu = $(this).parent().find('.submenu')
		submenu.fadeOut(001)
	})

    $('.rifles').on('mouseleave',function() {
		var submenu = $(this).parent().find('.submenu')
		submenu.fadeOut(001)
	})

    $('.shotguns').on('mouseleave',function() {
		var submenu = $(this).parent().find('.submenu')
		submenu.fadeOut(001)
	})

    $('.heavy').on('mouseleave',function() {
		var submenu = $(this).parent().find('.submenu')
		submenu.fadeOut(001)
	})

    $('.armor').on('mouseleave',function() {
		var submenu = $(this).parent().find('.submenu')
		submenu.fadeOut(001)
	})


    $('.item-list .submenu a').on('click', function(e) 
    {
        var current_item = $(this).attr('class')

        for(item in weapons)
        {
            if(weapons[item].name == current_item)
            {
                var container = $('.item-stats')
                container.find('.w_img').html(weapons[item].image)
                container.find('.w_name').html(weapons[item].wname)
                container.find('.damage').html(weapons[item].damage)
                container.find('.magazine').html(weapons[item].magazine)
                container.find('.fire_rate').html(weapons[item].fire_rate)
                container.find('.range').html(weapons[item].range)
                container.find('.accuracy').html(weapons[item].accuracy)
                container.find('.weight').html(weapons[item].weight)
                container.find('.value').html(weapons[item].value)
            }
        }
            
    })

    $('.item-list .submenu a').on('click', function(e)
    {
        var current_item = $(this).attr('class')

        for(item in armor)
        {
            if(armor[item].name == current_item)
            {
                var container = $('.item-stats')
                container.find('.a_img').html(armor[item].image)
                container.find('.arm_name').html(armor[item].armname)
                container.find('.defence').html(armor[item].defence)
                container.find('.ud').html(armor[item].ud)
                container.find('.value').html(armor[item].value)
            }
        } 
    })

    $('.item-list .submenu a').click(function(e) {
        e.preventDefault()
        $('.item-list a').removeClass('active')
        $(this).addClass('active')
    })

    $('.nav-tabs button').click(function(e) {
        e.preventDefault()
        $('.nav-tabs button').removeClass('active')
        $(this).addClass('active')
    })

    $('.special-menu li').click(function(e) {
        e.preventDefault()
        $('.special-menu li').removeClass('active')
        $(this).addClass('active')
    })

})