/**
 * Created by Administrator on 2016/11/30 0030.
 */
//Mods.Kbind.eatfood();//吃食物
//players[0].temp.inventory.forEach(function(ee){ if(ee.id==97) mm_food_count++;})
//Chest.withdraw(99)
//
yumao_pos = [

    {i: 6, j: 32},
    {i: 7, j: 34},
    {i: 6, j: 38},
    {i: 8, j: 27},
    {i: 9, j: 31},
    {i: 9, j: 36},
    {i: 11, j: 27},
    {i: 12, j: 34},
    {i: 13, j: 36},
    {i: 14, j: 30},
    {i: 14, j: 33},
    {i: 14, j: 33},
    {i: 15, j: 27},
    {i: 15, j: 37},
    {i: 16, j: 34},
    {i: 18, j: 29},
    {i: 19, j: 31},
    {i: 19, j: 33},
    {i: 10, j: 39},
    {i: 13, j: 39}


];
yl_pos = [

    {i: 91, j: 70},
    {i: 90, j: 76},
    {i: 91, j: 79},
    {i: 95, j: 78},
    {i: 94, j: 81},
    {i: 93, j: 74}

];
mm_action = '';
//怪物点
yl_pos_dixia = [

    {i: 32, j: 42},
    {i: 35, j: 42},
    {i: 30, j: 33},
    {i: 33, j: 31},
    {i: 34, j: 34},
    {i: 37, j: 31},
    {i: 39, j: 26},
    {i: 34, j: 25},
    {i: 30, j: 29},
    {i: 20, j: 33},
    {i: 20, j: 28},
    {i: 25, j: 29},
    {i: 28, j: 25},
    {i: 24, j: 22},
    {i: 30, j: 20}


];
//--------------------------------------------------------
//回箱子路径
mm_bj_path = [{i: 27, j: 35},
    {i: 22, j: 41},
    {i: 21, j: 47},
    {i: 17, j: 53},
    {i: 13, j: 59},
    {i: 12, j: 65},
    {i: 11, j: 71},
    {i: 12, j: 77},
    {i: 17, j: 83},
    {i: 23, j: 86},
    {i: 27, j: 92},
    {i: 33, j: 93},
    {i: 38, j: 90},
    {i: 38, j: 84},
    {i: 40, j: 82}

];//,{i:,j:},{i:,j:},{i:,j:},{i:,j:}];
//7,20 11,26 11,32 17,38 11,41 10,47 14,51 d
//14,50 20,56 26,62 27,68 33,66 37,65

//回矿路径
mm_bj_path_x2k = [{i: 40, j: 82},
    {i: 38, j: 88},
    {i: 32, j: 93},
    {i: 27, j: 87},
    {i: 21, j: 86},
    {i: 16, j: 80},
    {i: 12, j: 74},
    // {i:14,j:},
    {i: 11, j: 68},
    {i: 12, j: 62},
    {i: 16, j: 56},
    {i: 21, j: 50},
    {i: 21, j: 44},
    {i: 22, j: 38},
    {i: 27, j: 35}
    // {i:7,j:20},


];

mm_back_pos = [{i: 27, j: 35}, {i: 26, j: 29}, {i: 34, j: 33}, {i: 29, j: 31},{i:34,j:24},{i:26,j:27}];

mm_center_pos = [{i: 26, j: 29},  {i: 34, j: 33},{i:26,j:27},{i:34,j:29}, {i: 29, j: 31},{i:34,j:24}];


mm_food_id = 99;


mm_magics = [410,409,405,406];


sqens_magic = [{b:'buchongmofa',ac:410,e:'m1d'},{b:'m2',ac:409,e:'m1d'},{b:'m3',ac:405,e:'m1d'},{b:'m4',ac:406,e:'mofaok'}]


mm_addmofa = function(){
    mm_bag_count = players[0].temp.inventory.length;
    if(mm_bag_count !=11)
    return;
    if(sqens_magic.findIndex(function(e){return e.b==mm_action;})<0)
    return;
        bu_magic = sqens_magic.find(function(e){return e.b==mm_action;})
        mm_magic_id = bu_magic.ac;
  selected_chest = chest_content.findIndex(function(e){return e.id==mm_magic_id;})%60;
    mm_chest_page = Math.floor(chest_content.findIndex(function(e){return e.id==mm_magic_id;})/60)+1;

  Chest.change_page(mm_chest_page);

  Chest.withdraw(20);
    
    InvMenu.use_all(mm_magic_id);
    setTimeout(' Chest.deposit_all()',2000);
    if(sqens_magic.findIndex(function(e){return e.b==mm_action;})<sqens_magic.length-1)
    mm_action = sqens_magic[sqens_magic.findIndex(function(e){return e.b==mm_action;})+1].b;
    else
    {

        mm_action='buji';
       
        }

}


// mm_center_pos = {i: 29, j: 29};
go_pos = function (mmsx) {


    players[0].path = findPathFromTo(players[0], mmsx, players[0]);
}






mm_check_path_pos = function () {
    if (players[0].params.penalty>1)
		return;

    mm_busy = players[0].temp.busy;
    mm_fight =enemy_healthbar.className.indexOf('hidden') <0;
    eat_food_count = players[0].temp.inventory.filter(function (e) {
        return e.id == mm_food_id
    }).length;
    pet_food_count = players[0].pet.chest.filter(function (e) {
        return e == mm_food_id
    }).length;

    bag_count = players[0].temp.inventory.length;
    if (checkPos(mm_bj_path_x2k[mm_bj_path_x2k.length - 1]) && mm_action == 'x2k')
        mm_action = 'fight';

    

    if (checkPos(mm_bj_path[mm_bj_path.length - 1]) && mm_action == 'k2x')
        mm_action = 'cundx';

    if (checkPos(mm_bj_path[mm_bj_path.length - 1]) && mm_action == 'cundx' && bag_count == 11)
        mm_action = 'buchongmofa';

//     if(checkPos(mm_bj_path[mm_bj_path.length-1]) && mm_action=='buchongmofa' && players[0].params.magics.length==4 )
//         mm_action='buji';

    if (mm_action == 'buji' && eat_food_count > 20)
        mm_action = 'x2k';


    if (mm_action == 'buji' && bag_count < 25) {

//         food_index = chest_content.findIndex(function (e) {
//             return e.id == mm_food_id;
//         });
//         selected_chest = food_index;

    selected_chest = chest_content.findIndex(function(e){return e.id==mm_food_id;})%60;
    mm_chest_page = Math.floor(chest_content.findIndex(function(e){return e.id==mm_food_id;})/60)+1;

  Chest.change_page(mm_chest_page);



        Chest.withdraw(99);
        Mods.Petinv.load();

        Chest.withdraw(14);
    }

    if (mm_action == 'cundx') {

        Chest.deposit_all();


    }

    if (mm_action == 'gobackpos' && mm_fight!=true) {

        mm_go_back_pos(mm_back_pos);

    }

   

    mm_baijin(mm_bj_path, 'k2x');
    mm_baijin(mm_bj_path_x2k, 'x2k');

     mm_addmofa();
}


 function noticestr(e){
        new Notification('哈哈', {body: '真不错!'});

  }
mm_fight_yanling = function () {

if (players[0].params.penalty>1)
		return;

    eat_food_count = players[0].temp.inventory.filter(function (e) {
        return e.id == mm_food_id
    }).length;
    pet_food_count = players[0].pet.chest.filter(function (e) {
        return e == mm_food_id
    }).length;
    pet_bag_count = players[0].pet.chest.length;
    mm_busy = players[0].temp.busy;

    mm_info.textContent = 'action:'+mm_action;
    mm_info.textContent += ' food_count:'+(eat_food_count+pet_food_count);
    mm_info.textContent += ' busy:'+mm_busy;
    mm_info.textContent += '\r\n';

   mm_ccc = players[0].temp.inventory.slice(11);
    mm_bag_price=0;
    mm_ccc.filter(function(e){return e.id!=mm_food_id;}).forEach(
        function(e){ mm_bag_price += item_base[e.id].params.price;}
    );

    lbl_price.textContent = 'total:'+mm_bag_price;
    // if(ppp.indexOf('Efree')>0)

 

   mm_baobei_count =  players[0].temp.inventory.filter(function(e){return e.id==895;}).length;

   if(mm_baobei_count>lbl_baobei.textContent)
   {
       new Notification('哈哈', {body: '真不错!'});
       setTimeout('noticestr(1)',3000);
       setTimeout('noticestr(1)',6000);
       setTimeout('noticestr(1)',9000);
      
   }
  
   if(mm_baobei_count!=lbl_baobei.textContent)
   {
       
       lbl_baobei.textContent = mm_baobei_count;
   }
   
   if(mm_baobei_count>0)
   {

       mm_info.textContent +='找到宝贝！重要说3遍!';
   }
    

        



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

    if (eat_food_count == 0 && !mm_busy && pet_bag_count > 0) {
        Mods.Petinv.unload();


    }


    if (enemy_healthbar.className.indexOf('hidden') > 0 && mm_action == 'fight')
        check_near_pos(yl_pos_dixia);
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





mm_start_fight=function(e){

    if(e==1)
    {
         mm_action = se_action.value;
mm_t1 = setInterval('mm_fight_yanling()', 2500);
mm_t2 = setInterval('mm_check_path_pos()', 2500);


    }else
    {

        clearInterval(mm_t1);
        clearInterval(mm_t2);
    }


}
mm_action_change=function(){
    mm_start_fight(0);

   mm_action = se_action.value;
 mm_start_fight(1);
}


btn_go = document.createElement('button');
btn_go.textContent='go';
btn_go.addEventListener('click',function(){mm_start_fight(1);});

mmtest.appendChild(btn_go);


btn_stop = document.createElement('button');
btn_stop.textContent='stop';

btn_stop.addEventListener('click',function(){mm_start_fight(0);});

mmtest.appendChild(btn_stop);
se_action = document.createElement('select');
se_action.options.add(new Option('fight'));
se_action.options.add(new Option('k2x'));
se_action.options.add(new Option('x2k'));


mmtest.appendChild(se_action);

