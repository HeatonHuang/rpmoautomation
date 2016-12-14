





mm_path_dadi_x2z = [
    {i:83,j:37},
    {i:83,j:31},
    {i:86,j:25},
    {i:90,j:19},
    {i:92,j:16},
    {i:6,j:9},
    {i:12,j:13},
    {i:18,j:14},
    {i:24,j:12},
    {i:30,j:12},
    {i:34,j:18},
    {i:38,j:23},
    {i:44,j:29},
    {i:42,j:35},
    {i:42,j:38}

];

mm_path_dadi_z2x = [
    {i:42,j:38},
    {i:42,j:32},
    {i:36,j:26},
    {i:30,j:20},
    {i:26,j:14},
    {i:20,j:14},
    {i:17,j:14},
    {i:11,j:12},
    {i:5,j:9},
    {i:92,j:16},
    {i:86,j:22},
    {i:83,j:28},
    {i:83,j:34},
    {i:83,j:38}

]


mm_check_buy=function () {

    mm_bag_count = players[0].temp.inventory.length;
    // mm_shop_count = shop_content[7].count;
    // mm_shop_count1 = shop_content[8].count;
    pet_bag_count = players[0].pet.chest.length;
    dimofa_count = players[0].temp.inventory.filter(function(e){return e.id==410;}).length;
    zhubu_count = players[0].temp.inventory.filter(function(e){return e.id==266;}).length;

    if(checkPos(mm_path_dadi_z2x[0]))
    {
        if(dimofa_count<37 && mm_action=='x2z')
        {

            InvMenu.use(4);
            fight_pos(42,39);
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


    if(checkPos({i:92,j:16}) && mm_action=='x2z')
        fight_pos(92,15);

    if(checkPos({i:6,j:9}) &&mm_action=='z2x')
        fight_pos(5,9);



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
