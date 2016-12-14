/**
 * Created by Administrator on 2016/12/11 0011.
 */



mm_bj_path=[{i:74,j:73},
    {i:74,j:70},
    {i:72,j:66},
    {i:72,j:66},
    {i:74,j:60},
    {i:75,j:54},
    {i:78,j:48},
    {i:80,j:42},
    {i:79,j:36},
    {i:83,j:37},

];//,{i:,j:},{i:,j:},{i:,j:},{i:,j:}];
//7,20 11,26 11,32 17,38 11,41 10,47 14,51 d
//14,50 20,56 26,62 27,68 33,66 37,65

mm_kd={i:73,j:73};

mm_bj_path_x2k=[{i:83,j:37},
    {i:80,j:42},
    {i:78,j:48},
    {i:75,j:54},
    {i:74,j:60},
    {i:72,j:66},
    {i:74,j:70},
    {i:74,j:73},


];



check_near_pos = function (pos_path) {

    mm_i = players[0].i;
    mm_j = players[0].j;
    i_min = 100;
    j_min = 100;
    pos = {};
    tmp_pos = {};

    for (z = 0; z < pos_path.length; z++) {
        if (!obj_g(on_map[current_map][pos_path[z].i][pos_path[z].j]))
            continue;
        i_tmp = Math.abs(pos_path[z].i - mm_i);
        j_tmp = Math.abs(pos_path[z].j - mm_j);
        // if(j_tmp<j_min)
        //     j_min= j_tmp;
        // if(i_tmp<i_min)
        //     i_min= i_tmp;
        if ((i_min + j_min) > (i_tmp + j_tmp) && j_tmp < 7 && i_tmp < 7) {
            i_min = i_tmp;
            j_min = j_tmp;
            tmp_pos = pos_path[z];

        }

    }
    if (typeof(tmp_pos.j) != "undefined")
        fight_pos(tmp_pos.i, tmp_pos.j);
    // else if (players[0].i != mm_center_pos[0].i && players[0].j != mm_center_pos[0].j)
    // // go_pos({i:92,j:76});//铁矿中心
    //     mm_go_back_pos(mm_center_pos);
    //     // go_pos({i: 26, j: 29});//血河中心

}



fightNear=function(mobname){
	
	


    check_near_pos(mm_mobs);

}

mm_food_id=75;
mm_mainfunc = function()
{
	 window.onerror='';
	lbl_price.textContent =Number(lbl_price.textContent)+1;
	mm_fight = enemy_healthbar.className.indexOf('hidden') <0;
	mm_heal_str = player_health_name.textContent;
	heal_reg = b=/\d{1}/;
	heal_ind =mm_heal_str.search(heal_reg);
	mm_heal = Number(mm_heal_str.substr(heal_ind,2));
		mm_info.textContent = '';
	mm_info.textContent += 'hp:'+mm_heal;
	
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
   eat_food_count = players[0].temp.inventory.filter(function (e) {
        return e.id == mm_food_id
    }).length;
    pet_food_count = players[0].pet.chest.filter(function (e) {
        return e == mm_food_id
    }).length;
    mm_busy =players[0].temp.busy;
    // mm_bag_count = Number(td_inventory.textContent);
    //背包剩余数量
    mm_bag_count=40-players[0].temp.inventory.length;
    mm_pet_bag = 8- players[0].pet.chest.length;
	if (mm_bag_count==0)
		return;
	if(mm_heal<10)
	return;
	if(mm_fight)
		return;
	if(!mm_fight&&mm_bag_count>0&&mm_heal>10&&mm_action=='fight')
		fightNear();
	
   if (eat_food_count == 0 && pet_food_count == 0) {
       if (mm_action == 'fight' || mm_action == 'eatfood')
           mm_action = 'gobackpos';
       if (mm_action == 'gobackpos' && checkPos({i: 27, j: 35}))
           mm_action = 'k2x';
   }
    if (player_health.style.width.substring(0, 1) == '5' && eat_food_count > 0) {

        mm_action = 'eatfood';
    }

    if (Number(player_health.style.width.substring(0, 1)) > 5 && eat_food_count > 0 && (mm_action == 'eatfood'||mm_action=='gobackpos')) {
        mm_action = 'fight';
    }

    if (eat_food_count == 0 && !mm_busy && mm_pet_bag > 0) {
        Mods.Petinv.unload();


    }

	    if (enemy_healthbar.className.indexOf('hidden') > 0 && mm_action == 'eatfood') {

        mm_food_inv_id = players[0].temp.inventory.findIndex(function (e) {
            return e.id == mm_food_id;
        });
		if(mm_food_inv_id>0)
		{

            if(players[0].temp.inventory[mm_food_inv_id].id==mm_food_id)
            {

                Mods.Kbind.eatfood();//吃食物
                Mods.Kbind.eatfood();//吃食物
                // InvMenu.use(mm_food_inv_id);
                // InvMenu.use(mm_food_inv_id);
            }


        // Mods.Kbind.eatfood();//吃食物
        // Mods.Kbind.eatfood();//吃食物
		}
    
    }

	
	
}

