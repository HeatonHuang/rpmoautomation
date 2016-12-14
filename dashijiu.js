/**
 * Created by Heaton on 2016/12/14.
 */

function clearbag() {
    Mods.destroyallitems(12);
    popup_prompt_confirm.click();
    Mods.destroyallitems(435);
    popup_prompt_confirm.click();
    Mods.destroyallitems(234);
    popup_prompt_confirm.click();
    // Mods.destroyallitems(3);
    // popup_prompt_confirm.click();

}

yumao_id =2033;
mm_mainfunc = function()
{

	 window.onerror='';



    //变量获取
	mm_fight = enemy_healthbar.className.indexOf('hidden') <0;
	mm_heal_str = player_health_name.textContent;
	heal_reg = b=/\d{1}/;
	heal_ind =mm_heal_str.search(heal_reg);
	mm_heal = Number(mm_heal_str.substr(heal_ind,2));
    mm_busy =players[0].temp.busy;
    //背包剩余数量
    mm_bag_count=40-players[0].temp.inventory.length;
    mm_pet_bag = 16- players[0].pet.chest.length;
    yumao_count = players[0].temp.inventory.filter(function (e) { return e.id == yumao_id; }).length;
    pet_yumao_count = players[0].pet.chest.filter(function (e) { return e == yumao_id; }).length;
    heal_can_fight=mm_heal>30;

//信息显示
    mm_info.textContent = '';
    lbl_price.textContent =Number(lbl_price.textContent)+1;
	mm_info.textContent += 'hp:'+mm_heal;
    mm_info.textContent += 'action:'+mm_action;


    if (players[0].params.penalty>1)
    {

        clearInterval(mm_t1);
        return;
    }
       if(captcha&&!mm_cap)
    {
		for(iii=1;iii<10;iii++)
			setTimeout(mm_show_message,iii*1000);
    }
    else
    {
        mm_cap = false;

    }
    mm_info.textContent += 'yumao:'+yumao_count;
	// if (mm_bag_count==0)
	// 	return;
	if(mm_fight||mm_busy)
		return;
    //状态条件判断
    if(mm_bag_count==0&&yumao_count<29)
        mm_action='clearbag';
    if(mm_bag_count==0&&yumao_count==29&&mm_pet_bag>0)
        mm_action='savebag';
    if(mm_bag_count==0&&mm_pet_bag==0&&yumao_count==29)
        mm_action='goback';
    if (heal_can_fight&&mm_bag_count>0&&mm_heal>30)
        mm_action = 'fight';
    if (mm_heal<=40)
        mm_action = 'eatfood';


    switch (mm_action)
    {
        case 'clearbag':
            clearbag();
            break;
        case 'savebag':
            Mods.Petinv.load();
            break;
        case 'fight':
            if(mm_bag_count>0&&mm_heal>10)
                fightNear();
            break;
        case 'eatfood':
            Mods.Kbind.eatfood();//吃食物
            Mods.Kbind.eatfood();//吃食物
            break;
        case 'goback':

                setTimeout(mm_show_message,iii*1000);
            break;

    }



}

