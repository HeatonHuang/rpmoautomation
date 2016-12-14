/**
 * Created by Administrator on 2016/12/1 0001.
 */




buy1_pos={i:18,j:33};
buy34_pos={i:14,j:25};
xz_pos= {i:14,j:31};
gd_pos={i:15,j:27};

mm_mainfunc=function () {

 window.onerror='';
	lbl_price.textContent =Number(lbl_price.textContent)+1;
	if (players[0].params.penalty>1)
		return;
	
    mm_bag_count = players[0].temp.inventory.length;

    huoshi_count = players[0].temp.inventory.filter(function(e){return e.id==405;}).length;
    shuishi_count = players[0].temp.inventory.filter(function(e){return e.id==406;}).length;
    zhubu_count = players[0].temp.inventory.filter(function(e){return e.id==266;}).length;

   xiangzi_zhubu_count =  chest_content.find(function(e){return e.id==266;}).count;
    lbl_price.textContent = 'zhubu:'+xiangzi_zhubu_count;



    if(xiangzi_zhubu_count>txt_limit.value)
        clearInterval(mm_t1);

    if(checkPos(buy1_pos))
    {

        if(zhubu_count<20)
        {
            selected_shop=0;
            Shop.buy();

        }
        else
            go_pos(gd_pos);

    }
    if(checkPos(gd_pos))
        fight_pos(13,25);
        // go_pos(buy34_pos);


    if(checkPos(buy34_pos))
    {
        if(huoshi_count<10) {
            selected_shop = 7;
            Shop.buy();
        }
        else if(mm_bag_count<40)
        {

                selected_shop=8;
                Shop.buy();

        }
            else

        {
            go_pos(xz_pos);


        }

    }

    if(checkPos(xz_pos))
    {
       if(mm_bag_count>2)
       {

           Chest.deposit_all();

       }else
       {
           fight_pos(19,33);
           // go_pos(buy1_pos);


       }


    }



}


mm_t1=setInterval('mm_check_buy()',1000);
