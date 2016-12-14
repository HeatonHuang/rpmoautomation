/**
 * Created by Administrator on 2016/12/4 0004.
 */

mm_farm_zhongzi=794;

mm_farm_huifu=function () {

    Mods.Farming.pauseQueue('resume');

}

mm_farm_dundx=function(){


    Chest.deposit_all();

    setTimeout(mm_farm_huifu,1500);



}




mm_add_queue1 =function () {

    my_i=[10,12,13,15,16,18,19,21];
    for(ii=11;ii<18;ii+=3)
    {
        for(jj=10;jj<25;jj++)
        {

            Mods.Farming.addToQueue(obj_g(on_map[current_map][ii-1][jj]));
            Mods.Farming.addToQueue(obj_g(on_map[current_map][ii+1][jj]));

        }


    }


}

mm_add_queue2 =function () {

    my_i=[10,12,13,15,16,18,19,21];
    for(ii=20;ii<24;ii+=3)
    {
        for(jj=10;jj<25;jj++)
        {

            Mods.Farming.addToQueue(obj_g(on_map[current_map][ii-1][jj]));
            Mods.Farming.addToQueue(obj_g(on_map[current_map][ii+1][jj]));

        }


    }


}
mm_farm_yong_zhongz=function () {

    InvMenu.use(4);

}

mm_farm_qu_zhongzi = function () {
   zhongzi_index = chest_content.findIndex(function (e) {
            return e.id == mm_farm_zhongzi;
        });
        Chest.deposit_all();
        selected_chest = zhongzi_index;
        Chest.withdraw(99);


    setTimeout(mm_farm_yong_zhongz,2500);
    setTimeout(mm_farm_huifu,3500);

        // Mods.Petinv.load();

        // Chest.withdraw(99);

}





mmtest.insertAdjacentHTML('beforeEnd',"<button id='btn_tian1' onclick='mm_add_queue1()' Text='田1' />");
mmtest.insertAdjacentHTML('beforeEnd',"<button id='btn_tian2' onclick='mm_add_queue2()' Text='田2' />");
mmtest.insertAdjacentHTML('beforeEnd',"<button id='btn_cunxz' onclick='mm_farm_dundx()' Text='田2' />");

btn_tian1.textContent='田1';
btn_tian2.textContent='田2';
btn_cunxz.textContent='存箱子';
// Mods.Farming.pauseQueue('resume') 回复
//Mods.Farming.pauseQueue('queue')

mmtest.insertAdjacentHTML('beforeEnd',"<button id='btn_quzhongzi' onclick='mm_farm_qu_zhongzi()' Text='田2' />");
btn_quzhongzi.textContent='取种子';

mmtest.insertAdjacentHTML('beforeEnd',"<button id='btn_buyzz' onclick='mm_buy_zz_start(1)' Text='田2' />");
mmtest.insertAdjacentHTML('beforeEnd',"<button id='btn_stopbuyzz' onclick='mm_buy_zz_start(0)' Text='田2' />");
btn_buyzz.textContent='买种子';

btn_stopbuyzz.textContent='停止买种子';



// function mm_fight_yumao()
// {
//
//     if(players[0].temp.inventory.length==40)
//     {
//         mm_action='clearbag';
//
//     }
//     else
//         mm_action='fight';
//
//     if(enemy_healthbar.className.indexOf('hidden')>0 &&mm_action=='fight')
//         check_near_pos();
//     if(mm_action=='clearbag')
//     {
//         Mods.destroyallitems(759) ;
//         popup_prompt_confirm.click();
//         Mods.destroyallitems(756) ;
//         popup_prompt_confirm.click();
//         Mods.destroyallitems(492) ;
//         popup_prompt_confirm.click();
//         Mods.destroyallitems(3) ;
//         popup_prompt_confirm.click();
//      //   mm_action='fight';
//
//
//     }
//
//
// }

// mm_t1 = setInterval('mm_fight_()',1500);