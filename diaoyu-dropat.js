/**
 * Created by Administrator on 2016/11/30 0030.
 */
/**
 * Created by Administrator on 2016/11/27 0027.
 */
/**
 * Created by Administrator on 2016/11/27 0027.
 */
window.onerror='';
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


mm_bj_path=[{i:16,j:9},
    {i:19,j:13},
    {i:21,j:17}

];//,{i:,j:},{i:,j:},{i:,j:},{i:,j:}];
//7,20 11,26 11,32 17,38 11,41 10,47 14,51 d
//14,50 20,56 26,62 27,68 33,66 37,65
mm_kd={i:16,j:8};

mm_bj_path_x2k=[{i:21,j:17},
    {i:19,j:13},
    {i:16,j:9},


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
    {

        clearInterval(mm_t1);
        return;
    }
       if(captcha&&!mm_cap)
    {
		for(iii=1;iii<10;iii++)
			setTimeout(mm_show_message,iii*1000);
		
       


        
        // clearInterval(mm_t1);

    }
    else
    {
        mm_cap = false;

    };
  
    mm_busy =players[0].temp.busy;
    // mm_bag_count = Number(td_inventory.textContent);
    //背包剩余数量
    mm_bag_count=40-players[0].temp.inventory.length;
    mm_pet_bag = 12- players[0].pet.chest.length;
    //挖矿点
    if(checkPos(mm_bj_path[0]))
    {
        if(mm_bag_count>3 && mm_busy==false)
            fight_pos(mm_kd.i,mm_kd.j);
        if(mm_bag_count==0 && mm_pet_bag >0 &&mm_busy==false)
            Mods.Petinv.load();
       if(mm_bag_count==0 && mm_pet_bag==0 && mm_busy==false)
                if(mm_bag_count==0  && mm_busy==false)

            mm_action ='k2x';



    };
    //箱子点

    if(checkPos(mm_bj_path[mm_bj_path.length-1]))
    {
        if(mm_bag_count<=37)
            Chest.deposit_all();

        if(mm_bag_count>15 && mm_pet_bag==0)

            Mods.Petinv.unload();

        //if(mm_bag_count>37 )
           if(mm_bag_count>35 && mm_pet_bag>0)
            mm_action='x2k';


    };
    mm_baijin(mm_bj_path_x2k,'x2k');
mm_baijin(mm_bj_path,'k2x');
}




