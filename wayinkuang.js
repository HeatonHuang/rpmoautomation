mm_yk_path=[{i:72,j:77},
    {i:74,j:73},
    {i:74,j:67},
    {i:74,j:61},
    {i:75,j:55},
    {i:76,j:49},
    {i:76,j:43},
    {i:79,j:37},
    {i:83,j:37}

];//,{i:,j:},{i:,j:},{i:,j:},{i:,j:}];
//7,20 11,26 11,32 17,38 11,41 10,47 14,51 d
//14,50 20,56 26,62 27,68 33,66 37,65


mm_yk_path_x2k=[
{i:83,j:37},
    {i:80,j:43},
    {i:79,j:49},
    {i:77,j:54},
    {i:75,j:58},
    {i:73,j:64},
    // {i:14,j:},
    {i:74,j:70},
    {i:74,j:76},
    {i:72,j:77}
];
//37,65 31,70 25,64 21,58 17,52 15,50 L
//14,50 10,44 16,41 10,35 10,29 11,23 7,20
mm_action='';
mm_cap=false;



function mm_mainfunc() {


    window.onerror='';



    lbl_price.textContent = '验证点数:'+(-players[0].params.penalty);
	if (players[0].params.penalty>1)
		return;
	
    mm_busy =players[0].temp.busy;


    mm_bag_count=40-players[0].temp.inventory.length;
    mm_pet_bag = 16- players[0].pet.chest.length;
    mm_bag_count = Number(td_inventory.textContent);
    if(captcha&&!mm_cap)
    {
        new Notification('验证码',{body:'快看快看!'});
        mm_cap = true;

    }
    else
    {
        mm_cap = false;

    };


    mm_busy =players[0].temp.busy;
    // mm_bag_count = Number(td_inventory.textContent);
    //背包剩余数量
    mm_bag_count=40-players[0].temp.inventory.length;
    mm_pet_bag = 16- players[0].pet.chest.length;
    //挖矿点
    if(checkPos(mm_yk_path[0]))
    {
        if(mm_bag_count>3 && mm_busy==false)
            fight_pos(71,77);
        if(mm_bag_count==0 && mm_pet_bag >0 &&mm_busy==false)
            Mods.Petinv.load();
        if(mm_bag_count==0 && mm_pet_bag==0 && mm_busy==false)
            mm_action ='k2x';



    };
    //箱子点

    if(checkPos(mm_yk_path_x2k[0]))
    {
        if(mm_bag_count<30)
            Chest.deposit_all();

        if(mm_bag_count>15 && mm_pet_bag==0)

            Mods.Petinv.unload();

        if(mm_bag_count>=37 && mm_pet_bag>0)
            mm_action='x2k';


    }

    mm_baijin(mm_yk_path_x2k,'x2k');
    mm_baijin(mm_yk_path,'k2x');
}


