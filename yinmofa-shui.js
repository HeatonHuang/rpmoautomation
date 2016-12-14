





mm_path_dadi_x2z = [
    {i:64,j:39},
    {i:68,j:33},
    {i:62,j:28},
    {i:56,j:31},
    {i:50,j:35},
    {i:44,j:37},
    {i:41,j:43},
    {i:47,j:49},
    {i:53,j:50},
    {i:59,j:51},
    {i:65,j:54},
    {i:67,j:54},
    {i:67,j:60},
    {i:67,j:66},
    {i:67,j:68},
    {i:66,j:68},
    {i:66,j:69},
    {i:65,j:69},
    {i:64,j:75},
    {i:62,j:75}

];

mm_path_dadi_z2x = [
    {i:62,j:75},
    {i:64,j:75},
    {i:65,j:69},
    {i:66,j:69},
    {i:66,j:68},
    {i:67,j:68},
    {i:67,j:62},
    {i:67,j:56},
    {i:67,j:54},
    {i:65,j:54},
    {i:59,j:51},
    {i:53,j:51},
    {i:47,j:45},
    {i:41,j:39},
    {i:47,j:37},
    {i:53,j:37},
    {i:59,j:31},
    {i:65,j:31},
    {i:65,j:37},
    {i:64,j:39}

];


mm_check_buy=function () {

    mm_bag_count = players[0].temp.inventory.length;
    // mm_shop_count = shop_content[7].count;
    // mm_shop_count1 = shop_content[8].count;
    pet_bag_count = players[0].pet.chest.length;
    dimofa_count = players[0].temp.inventory.filter(function(e){return e.id==409;}).length;
    zhubu_count = players[0].temp.inventory.filter(function(e){return e.id==266;}).length;

    if(checkPos(mm_path_dadi_z2x[0]))
    {
        if(dimofa_count<37 && mm_action=='x2z')
        {

            InvMenu.use(4);
            fight_pos(61,75);
        }

        if(dimofa_count<37)
        {

            mm_action='yinmofa';

        }
        if(dimofa_count==37)
            mm_action='z2x';

    }

    if(checkPos(mm_path_dadi_x2z[0]))
    {
        if(dimofa_count==37)
        {

            Chest.deposit_all();

        }
        // if(pet_bag_count>2)
        // {
        //     Mods.Petinv.unload();
        //
        //
        // }
        if(mm_bag_count==3 )
        {
            mm_action='nazhubu';
            selected_chest=44;
            Chest.withdraw(99);


        }
        if(zhubu_count==37)
            mm_action='x2z';

    }


    // if(checkPos({i:92,j:16}) && mm_action=='x2z')
    //     fight_pos(92,15);
    //
    // if(checkPos({i:6,j:9}) &&mm_action=='z2x')
    //     fight_pos(5,9);



}


mm_buy_zz_start=function (a) {
    if(a==1)
    {
        mm_t1=setInterval('mm_check_buy()',1500);
// mm_t2=setInterval('mm_buy_shop()',5000);
        mm_t3= setInterval("mm_baijin(mm_path_dadi_x2z,'x2z')",1500);
        mm_t4= setInterval("mm_baijin(mm_path_dadi_z2x,'z2x')",1500);
        mm_action='x2z';


    }else
    {

        clearInterval(mm_t1);
        clearInterval(mm_t3);
        clearInterval(mm_t4);
        mm_action='';

    }

}
