<html>
   <head>
      <meta charset="utf-8">
      <meta name="keywords" content="minecraft server, craftbukkit, bukkit, spigot, minecraft bukkit, bukkit server, bukkit download, craftbukkit download, bukkit server download, spigot download">
      <meta name="description" content="Download the latest version of Spigot, Bukkit or Paper for your Minecraft server!">
      <link rel="stylesheet" type="text/css" href="styles.css?28">
      <link rel="icon" href="https://serverjars.com/icon.png">
      <title>ServerJars</title>
      <script src="https://kit.fontawesome.com/aed5aa2394.js"></script>
   </head>
   <body>
      <div class="top">
         <img src="./logo_white.png" class="logo"/>
         <div class="content">
            <div class="tab">
               <div class="left">
                  <a href="./"><li><i class="fas fa-home"></i>Home</li></a>
                  <a href="#"><li><i class="fas fa-code"></i>API</li></a>
               </div>
               <div class="right">
                  <a href="https://discord.gg/FP25fg9"><li><i class="fab fa-discord"></i>Discord</li></a>
                  <a class="right switch"href="#">🌑</a>
                  <link rel="stylesheet" href="accets/css/styles-dark.css">
                  <link rel="stylesheet" href="accets/css/styles-lite.css" class="theme">
               </div>
            </div>
         </div>
      </div>
      <div class="content">
        <div class="info">
          <img src="./test2.png">
          <h1>Hello User!</h1>
          <p>At ServerJars we suggest using the latest available version of Spigot for your server. We also suggest checking our site for updates weekly, that way your server is always up to date and free of those nasty bugs & exploits that have the potential to plague your players experiences.</p>
          <br>
          <p>Feel free to join our discord if you would like us to ping you every time a major or exploit patching build is released. ^-^</p>
        </div>
      </div>
      <div class="content">
         <div class="jars">
            <div class="jar">
               <label>Spigot Jars</label>
               <?PHP $file = grab('spigot')[0]; ?>
               <a class="button large" href="https://serverjars.com/spigot/<?PHP echo $file; ?>"><i class="fas fa-download"></i> Download Latest: <?php echo str_replace('Spigot ', '', cleanName($file)); ?></a>
               <?PHP echo createTable("spigot"); ?>
            </div>
            <div class="jar">
               <label>Bukkit Jars</label>
               <?PHP $file = grab('bukkit')[0]; ?>
               <a class="button large" href="https://serverjars.com/bukkit/<?PHP echo $file; ?>"><i class="fas fa-download"></i> Download Latest: <?php echo str_replace('Bukkit ', '', cleanName($file)); ?></i></a>
               <?PHP echo createTable("bukkit"); ?>
            </div>
            <div class="jar">
               <label>Paper Jars</label>
               <?PHP $file = grab('paper')[0]; ?>
               <a class="button large" href="https://serverjars.com/paper/<?PHP echo $file; ?>"><i class="fas fa-download"></i> Download Latest: <?php echo str_replace('Paper ', '', cleanName($file)); ?></i></a>
               <?PHP echo createTable("paper"); ?>
            </div>
         </div>
         <div class="footer">
            <div class="innr">
               <a href="https://songoda.com/"><img src="./logo-grey.png?1"></a>
            </div>
         </div>
      </div>
      <?php
         function createTable($type) {
         ?>
      <table class="table">
         <thead>
            <tr class="first">
               <th>Version</th>
               <th>Date</th>
               <th>Download</th>
            </tr>
         </thead>
         <tbody>
            <?php
               foreach (grab($type) as $file) {
                   if (! strpos($file, '.jar')) {
                       continue;
                   } ?>
            <tr>
               <td><?php echo explode(" ", cleanName($file))[1]; ?></td>
               <td><?PHP echo date("F j, Y", filectime("./" . $type . "/" . $file)); ?></td>
               <td><a class="button" href="https://serverjars.com/<?PHP echo $type; ?>/<?php echo $file; ?>"><i class="fas fa-download"></i> Download</a></td>
            </tr>
            <?php
               }
               ?>
         </tbody>
      </table>
      <?PHP
         }

         function cleanName($file) {
           return ucfirst(str_replace('.jar', '', str_replace('-', ' ', str_replace('-R0.1-SNAPSHOT', '', str_replace('craft', '', str_replace('SNAPSHOT', '', str_replace('R0.1', '', str_replace(' ', '', $file))))))));
         }

           function grab($dir)
           {
               $files = scandir("./$dir/");
               $files = array_slice($files, 2);
               usort($files, 'version_compare');
               $files = array_reverse($files);
               return $files;
           }
           ?>
   </body>
</html>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-142405476-1"></script>
<script>
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());

   gtag('config', 'UA-142405476-1');
</script>
