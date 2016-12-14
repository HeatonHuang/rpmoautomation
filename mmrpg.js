

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


mm_go_back_pos = function (mm_order_path) {

    if (checkPos(mm_order_path[0]))
        return;

    for (ii = 0; ii < mm_order_path.length; ii++) {
        e = mm_order_path[ii];
        mm_path_temp = findPathFromTo(players[0], e, players[0]);
        if (mm_path_temp.length > 0) {

            go_pos(e);
            console.log(e.i + ':' + e.j);
            break;
        }

    }


}

go_pos=function(mmsx)
{


    players[0].path=findPathFromTo(players[0],mmsx,players[0]);
}


function checkPos(a_pos) {
    if (a_pos.i == players[0].i && a_pos.j == players[0].j)
        return true;
    else
        return false;

}

fight_pos = function (i, j) {


    mm_obj = obj_g(on_map[current_map][i][j]);

    if (mm_obj) {

        selected_object = mm_obj;

        ActionMenu.act(0);
    }


}


function clearbag() {
    Mods.destroyallitems(759);
    popup_prompt_confirm.click();
    Mods.destroyallitems(756);
    popup_prompt_confirm.click();
    Mods.destroyallitems(492);
    popup_prompt_confirm.click();
    Mods.destroyallitems(3);
    popup_prompt_confirm.click();

}
function mm_baijin(mm_path, act_str) {

    mm_busy = players[0].temp.busy;
    if (captcha && !mm_cap) {
        new Notification('验证码', {body: '快看快看!'});
        mm_cap = true;

    }
    else
        mm_cap = false;


    if (mm_action != act_str)
        return;


    for (i = 0; i < mm_path.length - 1; i++) {

        if (checkPos(mm_path[i])) {

            if (mm_busy == false)
                go_pos(mm_path[i + 1]);

        }


    }


}
mm_show_message=function(){
	 new Notification('验证码',{body:'快看快看!'});
        mm_cap = true;
}

checkNearPos = function (i, j) {

    mm_i1 = players[0].i;
    mm_j1 = players[0].j;

    i_tmp1 = Math.abs(i - mm_i);
    j_tmp1 = Math.abs(j - mm_j);

    return j_tmp1 < 7 && i_tmp1 < 7;
}


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
    else if (players[0].i != mm_center_pos[0].i && players[0].j != mm_center_pos[0].j)
    // go_pos({i:92,j:76});//铁矿中心
        mm_go_back_pos(mm_center_pos);
        // go_pos({i: 26, j: 29});//血河中心

}


mm_item_drop=function(a){
    Inventory.add(players[0],a.data.id)?(addChatText(_ti("Loot: {item_name}",{item_name:item_base[a.data.id].name}),void 0,COLOR.YELLOW,"loot"),Inventory.client_inventory_changed()):(addChatText(_te("Your inventory is full!"),void 0,COLOR.PINK,"spam"),12==current_map&&(a="right mouse clicking on it",touch_initialized&&(a="long pressing it"),addChatText(_ti("You can remove an item from inventory by "+a+" and choosing Destroy"),void 0,COLOR.TEAL)));
    BigMenu.init_inventory();
    //console.log('捡到:'+a.data.id);

    };
    
Client.item_drop=mm_item_drop;


mm_start_fight=function(e){

    if(e==1)
    {
			
   mm_mobs =   objects_data.filter(function(e){return e.name.indexOf(txt_limit.value)>-1&&e.id!=23362;});
         mm_action = se_action.value;
//mm_t1 = setInterval('mm_mainfunc()', 2500);
    }else
    {

        clearInterval(mm_t1);
        
    }


}

document.body.insertAdjacentHTML('beforeEnd',"<div id='mmtest'>info:<div>");
mmtest.style.position='absolute';
mmtest.style.width='200px';
mmtest.style.opacity=0.8;
mmtest.style.backgroundColor='#a3a2d1';
mmtest.style.top='20px';
mmtest.style.padding='10px';
mmtest.style.fontFamily='微软雅黑';
mmtest.insertAdjacentHTML('beforeEnd',"<div id='mm_info'  >action:</div>");

lbl_price = document.createElement('span');
mmtest.appendChild(lbl_price);

lbl_baobei = document.createElement('span') ;
lbl_baobei.textContent=0;
mmtest.appendChild(lbl_baobei);


txt_limit=document.createElement('input');
txt_limit.value=3500;
mmtest.appendChild(txt_limit);

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
btn_start = document.createElement('button');
btn_start.textContent='start';

btn_start.addEventListener('click',function(){

mm_t1 = setInterval('mm_mainfunc()', 2500);
});
mmtest.appendChild(btn_start);
