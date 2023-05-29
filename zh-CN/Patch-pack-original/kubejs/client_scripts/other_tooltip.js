onEvent('item.tooltip', tooltip => {
    // charcoal pit straw
    tooltip.add(
        ['charcoal_pit:straw'],
        '可以转化为农夫乐事的草秆~'
    )
    // tinkers blaze head
    tooltip.add(
        ['tconstruct:blaze_head'],
        '在第二纪元只能用劈刀方可获取~'
    )
    // create windmill sail
    tooltip.add(
        ['create:white_sail'],
        '现在只能用于装饰，因为风车轴承已经被禁用了～'
    )
    // me controller frame press
    tooltip.add(
        ['decursiomod:inscriber_master_press'],
        '可以用一组绿宝石块从外星人村民处获得~'
    )
    // ultimate singularity
    tooltip.add(
        ['extendedcrafting:ultimate_singularity'],
        '不会被量子压缩机消耗~'
    )
    // rocket tooltips
    tooltip.add(
        ['boss_tools:rocket_t1', 'boss_tools:rocket_t2', 'boss_tools:rocket_t3'],
        '空间站在这个整合包里不存在~'
    )
    // nether grout
    tooltip.addAdvanced('tconstruct:nether_grout', (item, advanced, text) => {
        text.add(2, '下界传送门能用死神镰刀开启')
    })
    // reaper scythe
    tooltip.add(
        ['eidolon:reaper_scythe'],
        '查看匠魂里的任意短刃镰的用途,来查看死神镰刀的配方'
    )
    // praetor scythe
    tooltip.add(
        ['sanguinearsenal:praetor_scythe'],
        '查看幻梦模组里的死神镰刀的用途,来查看这个物品的配方'
    )
    // scepter of blood
    tooltip.add(
        ['sanguinearsenal:scepter_of_blood'],
        '看幻梦模组里的魂火魔杖的用途,来查看这个物品的配方'
    )
    // blood flask
    tooltip.add(
        ['sanguinearsenal:blood_flask'],
        '查看血染武装模组里的炖僵尸之心的用途,来查看这个物品的配方~'
    )
    // sword of sapping
    tooltip.add(
        ['eidolon:sapping_sword'],
        '查看铁剑的用途,来查看这个物品的配方~'
    )
    // sanguine amulet
    tooltip.add(
        ['eidolon:sanguine_amulet'],
        '查看幻梦模组里的基础护符的的用途,来查看这个物品的配方~'
    )
    // rock crystal
    tooltip.add(
        ['astralsorcery:rock_crystal'],
        '海蓝宝石蜜脾块可以通过星能转化为水晶石矿石~'
    )
    // ghast blood tear
    tooltip.add(
        ['decursiomod:ghast_blood_tear'],
        '这个物品永远不会在制作物品的时候被消耗,就像桶一样~'
    )
    // pulse centrifuge
    tooltip.add(
        ['lazierae2:centrifuge'],
        '这个机器不能用任何方式升级了——想要生产水晶速度更快,来制作水晶生之加速器吧~'
    )
    // unstable ender pearl
    tooltip.add(
        ['decursiomod:unstable_ender_pearl'],
        '查看暗夜粉的用途来查看这个物品的配方~'
    )
    // magic workbench
    tooltip.add(
        ['eidolon:worktable'],
        '想我嘛？'
    )
    // create fluid pum
    tooltip.add(
        'create:mechanical_pump',
        ["转速越高，液体输送越快", '如果你的流体系统长度超过16格的话可以添加第二个动力泵']
    )
    // pewter blend
    tooltip.add(
        ['eidolon:pewter_blend'],
        '可以通过打碎一个已经放置好的原始坩埚或者损坏的药剂师酿造台获得'
    )

    // heart of diamond
    tooltip.add(
        ['quark:diamond_heart'],
        '右键一个石头方块（石头、圆石、花岗岩、闪长岩或安山岩）会生成一只石精灵。这只石精灵可以用命名牌给它取名，这样它就不会消失了。'
    )
    
    // thermal cells
    tooltip.add(
        ['thermal:energy_cell'],
        ' 如果你想把它用于ME系统里,就别在那里傻愣愣地把它拿在手上~'
    )

    tooltip.add(
        ['thermal:fluid_cell'],
        '如果你想把它用于ME系统里,就别在那里傻愣愣地把它拿在手上~'
    )
})