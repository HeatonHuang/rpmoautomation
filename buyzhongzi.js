/**
 * Created by Administrator on 2016/12/1 0001.
 */






mm_path_zhongz_x2z = [
    {i:83,j:37},
    {i:83,j:31},
    {i:86,j:25},
    {i:90,j:19},
    {i:92,j:16},
    {i:6,j:9},
    {i:12,j:14},
    {i:18,j:14},
    {i:24,j:12},
    {i:20,j:18},
    {i:14,j:20},
    {i:10,j:26},
    {i:10,j:28}

];

mm_path_zhongz_z2x = [
    {i:10,j:28},
    {i:11,j:22},
    {i:17,j:19},
    {i:23,j:17},
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
    mm_shop_count = shop_content[7].count;
    mm_shop_count1 = shop_content[8].count;
    pet_bag_count = players[0].pet.chest.length;
    if(checkPos(mm_path_zhongz_z2x[0]))
    {
        if(mm_bag_count==2)
         fight_pos(10,29);

        if(mm_bag_count<40)
        {

            mm_action='buyzz';
            // if(checkPos({i:10,j:28}) &&mm_action=='buyzz')
               // fight_pos(10,29);
            // if(mm_shop_count>0)
            // {
            //
            //     selected_shop=7;
            //     Shop.buy();
            //
            // }else if(mm_shop_count1>0)
            // {
            //
            //     selected_shop=8;
            //     Shop.buy();
            //
            // }

        }
        if(mm_bag_count==40&&pet_bag_count<16)
        {

           Mods.Petinv.load();
        }
        if(mm_bag_count==40&&pet_bag_count==16)
            mm_action='z2x';

    }

    if(checkPos(mm_path_zhongz_x2z[0]))
    {
       if(mm_bag_count>3)
       {

           Chest.deposit_all();

       }
       if(pet_bag_count>2)
       {
           Mods.Petinv.unload();


       }
       if(mm_bag_count==2 && pet_bag_count==0)
           mm_action='x2z';

    }


    if(checkPos({i:92,j:16}) && mm_action=='x2z')
        fight_pos(92,15);

    if(checkPos({i:6,j:9}) &&mm_action=='z2x')
        fight_pos(5,9);



}

mm_buy_shop=function () {
    Shop.buy();

}


mm_buy_zz_start=function (a) {
    if(a==1)
    {
        mm_t1=setInterval('mm_check_buy()',1500);
// mm_t2=setInterval('mm_buy_shop()',5000);
        mm_t3= setInterval("mm_baijin(mm_path_zhongz_x2z,'x2z')",1500);
        mm_t4= setInterval("mm_baijin(mm_path_zhongz_z2x,'z2x')",1500);
        mm_action='x2z';


    }else
    {

        clearInterval(mm_t1);
        clearInterval(mm_t3);
        clearInterval(mm_t4);
        mm_action='';

    }

}