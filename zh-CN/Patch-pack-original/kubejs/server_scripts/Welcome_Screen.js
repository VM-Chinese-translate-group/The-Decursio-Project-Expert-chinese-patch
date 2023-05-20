// Special thanks to LedyLexxie for providing the scripts shown below
onEvent('player.logged_in', e => {
  if (!e.player.persistentData.alreadyLogged) {
    e.player.persistentData.alreadyLogged = true
    e.server.runCommandSilent(`/title ${e.player.getName()} times 20 100000 20`)
    e.server.runCommandSilent(`/title ${e.player.getName()} title ["",{"text":"欢迎来到","italic":true,"color":"#9A52FF"},{"text":" The Project <3","bold":true,"italic":true,"color":"white"}]`) 
    e.server.runCommandSilent(`/title ${e.player.getName()} subtitle ["",{"text":"按 ","italic":true,"color":"#9A52FF"},{"text":"\`Backspace（退格键）\`","bold":true,"italic":true,"color":"white"},{"text":" 打开任务菜单","italic":true,"color":"#9A52FF"}]`)
  }
})

onEvent('player.data_from_client.key_pressed', e => {
  if (e.data.key == 259) {
    e.server.runCommandSilent(`/title ${e.player.getName()} clear`)
    e.server.runCommandSilent(`/title ${e.player.getName()} reset`)
  }
})
