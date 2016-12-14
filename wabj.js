/**
 * Created by Administrator on 2016/11/27 0027.
 */
/**
 * Created by Administrator on 2016/11/27 0027.
 */

//挖白金
function cleargo()
{
    touch_hold=0;
}

function godir(dir)
{
    touch_hold_i =0;
    touch_hold_j = 0;
    switch(dir)
    {
        case "r":
            touch_hold_i=1;
            break;

        case "l":
            touch_hold_i=-1;
            break
        case "u":
            touch_hold_j=1;
            break;
        case "d":
            touch_hold_j=-1;
            break;

    }
    touch_hold =1;
    setTimeout(cleargo,100);

}




gopos=function(mmsx)
{


    players[0].path=findPathFromTo(players[0],mmsx,players[0]);
}




function checkPos(a_pos) {
    if (a_pos.i == players[0].i && a_pos.j == players[0].j)
        return true;
    else
        return false;

}


mm_bj_path=[{i:7,j:20},
    {i:11,j:26},
    {i:11,j:32},
    {i:17,j:38},
    {i:11,j:41},
    {i:10,j:47},
    {i:14,j:51},
    {i:14,j:50},
    {i:20,j:56},
    {i:26,j:62},
    {i:27,j:68},
    {i:33,j:66},
    {i:37,j:65}

];//,{i:,j:},{i:,j:},{i:,j:},{i:,j:}];
//7,20 11,26 11,32 17,38 11,41 10,47 14,51 d
//14,50 20,56 26,62 27,68 33,66 37,65


mm_bj_path_x2k=[{i:37,j:65},
{i:31,j:70},
    {i:25,j:64},
    {i:21,j:58},
    {i:17,j:52},
    {i:15,j:50},
    {i:14,j:50},
    // {i:14,j:},
    {i:10,j:44},
    {i:16,j:41},
    {i:10,j:35},
    {i:10,j:29},
    {i:11,j:23},
    {i:7,j:20},


];
//37,65 31,70 25,64 21,58 17,52 15,50 L
//14,50 10,44 16,41 10,35 10,29 11,23 7,20
mm_action='';
mm_cap=false;
function mm_baijin(mm_path,act_str) {

    mm_busy =players[0].temp.busy;

    // mm_bag_count=40-players[0].temp.inventory.length;
    // mm_pet_bag = 16- players[0].pet.chest.length;
    // mm_bag_count = Number(td_inventory.textContent);
    if(captcha&&!mm_cap)
    {
        new Notification('验证码',{body:'快看快看!'});
        mm_cap = true;

    }
    else
    {
        mm_cap = false;

    };




    if(mm_action!=act_str)
        return;

    if(checkPos({i:15,j:50}) && mm_busy==false)
    {
		
        godir('l');

    }

    if(checkPos({i:14,j:51}) && mm_busy==false)
    {
		if(mm_bag_count==0)
			ActionMenu.act(1);
            godir('d');

    }

    if(checkPos({i:14,j:49}) && mm_busy==false)
    {
        // godir('u');
        gopos({i:14,j:50})

    }



    for(i=0;i<mm_path.length-1;i++)
    {

        if(checkPos(mm_path[i]))
        {


            if( mm_busy==false)
                gopos(mm_path[i+1]);



        };


    }


}

function mm_mainfunc() {
  window.onerror='';
	lbl_price.textContent =Number(lbl_price.textContent)+1;
	if (players[0].params.penalty>1)
		return;
	
    mm_busy =players[0].temp.busy;
    // mm_bag_count = Number(td_inventory.textContent);
    //背包剩余数量
    mm_bag_count=40-players[0].temp.inventory.length;
    mm_pet_bag = 12- players[0].pet.chest.length;
    //挖矿点
    if(checkPos(mm_bj_path[0]))
    {
        if(mm_bag_count>3 && mm_busy==false)
            godir('l');
        if(mm_bag_count==0 && mm_pet_bag >0 &&mm_busy==false)
            Mods.Petinv.load();
        if(mm_bag_count==0 && mm_pet_bag==0 && mm_busy==false)
            mm_action ='k2x';



    };
    //箱子点

    if(checkPos(mm_bj_path[mm_bj_path.length-1]))
    {
        if(mm_bag_count<37)
            Chest.deposit_all();

        if(mm_bag_count>15 && mm_pet_bag==0)

            Mods.Petinv.unload();

        if(mm_bag_count>=37 && mm_pet_bag>0)
            mm_action='x2k';


    };

	
	mm_baijin(mm_bj_path_x2k,'x2k');
	mm_baijin(mm_bj_path,'k2x');
}



mm_t1=setInterval("mm_mainfunc()",1500);





