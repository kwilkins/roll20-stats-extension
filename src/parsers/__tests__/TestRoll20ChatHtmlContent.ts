import { DiceRollType } from "../../model/DiceRollInterfaces";
import { testRollerNameDM } from "../../__tests__/TestRollerNames.util.test";

// Contains a real roll20 chat log with a single standard roll from a single user.
export const testHtmlContentSingleStandardRoll = `<div class="content">
  <div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KELlQVMhq7p0h926d" data-playerid="-M54pm-khgKWF5-SLCa3">
  <div class="spacer"></div>
  <div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div>
  <span class="tstamp" aria-hidden="true">April 19, 2020 6:39PM</span>
  <span class="by">${testRollerNameDM}:</span>
  <div class="formula" style="margin-bottom: 3px;">rolling d20-1</div>
  <div class="clear"></div><div class="formula formattedformula">
  <div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon">
  <div class="didroll">7</div><div class="backing"></div></div></div>)</div>-1<div class="clear"></div></div>
  <div class="clear"></div><strong>=</strong><div class="rolled">6</div></div>
  </div>`;

// Contains a real roll20 chat log with a single roll from Roll20 character sheet from a single user, with the QuantumRoll marker.
export const testHtmlContentSingleRoll20SheetRollWithQuantumRollMarker = `<div class="content">
  <div class="message general you" data-messageid="-N0tB9N1xbYjgOlnE25V">
  <div class="spacer"></div>
  <div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div>
  <span class="tstamp" aria-hidden="true">April 19, 2020 6:39PM</span>
  <span class="by">${testRollerNameDM}:</span>
  <div class="sheet-rolltemplate-atk">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" original-title="<img src=&quot;/images/quantumrollwhite.png&quot; class=&quot;inlineqroll&quot;> Rolling 1d20cs>20 + 1[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>7</span>)+3">10</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>20/60</span>
  </div>
  <div class="sheet-label">
  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5FiK8yhl3iq3M20MGF_attack_dmg">Dagger</a> <span>(+3)</span></span>
  </div>
  </div>
  </div>
  </div>
  </div>`;

// Contains a real Roll20 chat log with a single roll from Roll20 character sheet from a single user, without the QuantumRoll marker.
export const testHtmlContentSingleRoll20SheetRollWithoutQuantumRollMarker = `<div class="content">
  <div class="message general you" data-messageid="-N0tB9N1xbYjgOlnE25V">
  <div class="spacer"></div>
  <div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div>
  <span class="tstamp" aria-hidden="true">April 19, 2020 6:39PM</span>
  <span class="by">${testRollerNameDM}:</span>
  <div class="sheet-rolltemplate-atk">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" original-title="Rolling 1d20cs>20 + 1[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>7</span>)+3">10</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>20/60</span>
  </div>
  <div class="sheet-label">
  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5FiK8yhl3iq3M20MGF_attack_dmg">Dagger</a> <span>(+3)</span></span>
  </div>
  </div>
  </div>
  </div>
  </div>`;

// Contains a real Roll20 chat log with a single roll using Beyond20 extension to roll Roll20 dice from a single user, with the QuantumRoll marker.
export const testHtmlContentSingleBeyond20RollUsingRoll20DiceWithQuantumRollMarker = `<div class="content">
  <div class="message general you" data-messageid="-N16wJcVk87nNLBtzYuy">
  <div class="spacer"></div>
  <div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div>
  <span class="tstamp" aria-hidden="true">8:22PM</span><span class="by">${testRollerNameDM}:</span>
  <div class="sheet-rolltemplate-atk">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" original-title="<img src=&quot;/images/quantumrollwhite.png&quot; class=&quot;inlineqroll&quot;> Rolling 1d20 +2 = (<span class=&quot;basicdiceroll&quot;>7</span>)+2">9</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span><a href="!<br></a>
  &amp;{template:dmg} {{damage=1}} {{dmg1flag=1}} {{dmg1=[[1d6]]}} {{dmg1type=Bludgeoning (1-Hand)}} {{dmg2flag=1}} {{dmg2=[[1d8]]}} {{dmg2type=Bludgeoning (2-Hand)}} {{charname=${testRollerNameDM}}} {{rname=Quarterstaff}}">Quarterstaff</a> <span>(+2)</span></span>
  </div>
  <div class="sheet-charname">
  <span>${testRollerNameDM}</span>
  </div>
  </div>
  </div>
  </div>
  </div>`;

// Contains a real Roll20 chat log with a single roll using Beyond20 extension to roll Roll20 dice from a single user, without the QuantumRoll marker.
export const testHtmlContentSingleBeyond20RollUsingRoll20DiceWithoutQuantumRollMarker = `<div class="content">
  <div class="message general you" data-messageid="-N16wJcVk87nNLBtzYuy">
  <div class="spacer"></div>
  <div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div>
  <span class="tstamp" aria-hidden="true">8:22PM</span><span class="by">${testRollerNameDM}:</span>
  <div class="sheet-rolltemplate-atk">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" original-title="Rolling 1d20 +2 = (<span class=&quot;basicdiceroll&quot;>7</span>)+2">9</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span><a href="!<br></a>
  &amp;{template:dmg} {{damage=1}} {{dmg1flag=1}} {{dmg1=[[1d6]]}} {{dmg1type=Bludgeoning (1-Hand)}} {{dmg2flag=1}} {{dmg2=[[1d8]]}} {{dmg2type=Bludgeoning (2-Hand)}} {{charname=${testRollerNameDM}}} {{rname=Quarterstaff}}">Quarterstaff</a> <span>(+2)</span></span>
  </div>
  <div class="sheet-charname">
  <span>${testRollerNameDM}</span>
  </div>
  </div>
  </div>
  </div>
  </div>`;

// Contains a real Roll20 chat log with a single roll using Beyond20 extension to roll DnDBeyond dice from a single user.
export const testHtmlContentSingleBeyond20RollUsingDnDBeyondDice = `<div class="content">
  <div class="message general you" data-messageid="-N1A9Fm0AhCt7BkSQb5o">
  <div class="message general you" data-messageid="-N16wJcVk87nNLBtzYuy">
  <div class="spacer"></div>
  <div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div>
  <span class="tstamp" aria-hidden="true">8:22PM</span><span class="by">${testRollerNameDM}:</span>
  <div class="sheet-rolltemplate-simple">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" original-title="Rolling 9 [1d20 + 2] = (7) + 2 = 9">9</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span><a href="!">Quarterstaff</a> <span>(+2)</span></span>
  </div>
  <div class="sheet-charname">
  <span>${testRollerNameDM}</span>
  </div>
  </div>
  </div>
  </div>
  </div>`;

// Contains a real roll20 chat log with multiple standard and roll20 sheet template rolls from multiple users.
export const testHtmlContentBasicExample = `<div class="content">
  <div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M54q5mD_WIu1cS762Kk" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 16, 2020 6:54PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">4</div><div class="backing"></div></div></div>)</div><div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">4</div></div><div class="message general" data-messageid="-M5Jk2EJ5b67gJYW5ONS"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/6448269/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 4:22PM</span><span class="by">Nate:</span><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+0[STR] = (<span class=&quot;basicdiceroll&quot;>12</span>)+0">12</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+0[STR] = (<span class=&quot;basicdiceroll&quot;>15</span>)+0">15</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>STRENGTH <span>(0)</span></span>
  </div>
  </div>
  </div></div><div class="message general you" data-messageid="-M5JkAlWhYS-T4sbC9dL"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 4:23PM</span><span class="by">DM (Kevin) (GM):</span>15, 14, 13, 12, 10, 8</div><div class="message general" data-messageid="-M5JkLjGB4vfj5_O0ykM"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/6448269/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 4:23PM</span><span class="by">Nate:</span><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+0[CON] = (<span class=&quot;basicdiceroll&quot;>14</span>)+0">14</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+0[CON] = (<span class=&quot;basicdiceroll&quot;>7</span>)+0">7</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>CONSTITUTION <span>(0)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5JkUpAD9lDmCqBZlfi"><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+0[STR] = (<span class=&quot;basicdiceroll&quot;>8</span>)+0">8</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+0[STR] = (<span class=&quot;basicdiceroll&quot;>2</span>)+0">2</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>STRENGTH <span>(0)</span></span>
  </div>
  </div>
  </div></div><div class="message general you" data-messageid="-M5JmJYjf7mUEuYxrwHp"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 4:32PM</span><span class="by">DM (Kevin) (GM):</span><div class="sheet-rolltemplate-traits sheet-rolltemplate-darkmode">
  <div class="sheet-row sheet-header">
  <span>Breathe Weapon</span>
  </div>
  <div class="sheet-row sheet-subheader">
  <span class="sheet-italics">
  Racial: dragonborn
  </span>
  </div>
  <div class="sheet-row">
  <span class="sheet-desc">You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.</span>
  </div>
  </div></div><div class="message general" data-messageid="-M5Jm_aQvSqsQHGtiwMP"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 4:33PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-traits sheet-rolltemplate-darkmode">
  <div class="sheet-row sheet-header">
  <span>LANGUAGE PROFICIENCY</span>
  </div>
  <div class="sheet-row">
  <span class="sheet-desc">celestial</span>
  </div>
  </div></div><div class="message general you" data-messageid="-M5Jmbw_KWrh_W4Gu1OU"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 4:33PM</span><span class="by">DM (Kevin) (GM):</span>Paladin choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion</div><div class="message general you" data-messageid="-M5JmmULCI5c1w2Hy3PR">Druid choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival</div><div class="message general" data-messageid="-M5JnJjtb1wziEAcSfYj"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 4:36PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d20cs>20 + 1[STR] + 2[PROF] = (<span class=&quot;basicdiceroll critsuccess &quot;>20</span>)+1+2">23</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 1[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>19</span>)+1+2">22</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>20/60</span>
  </div>
  <div class="sheet-label">


  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5FiK8yhl3iq3M20MGF_attack_crit">Dagger</a> <span>(+3)</span></span>

  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5JnqpJJAX2y1nJAdtJ"><div class="sheet-rolltemplate-traits sheet-rolltemplate-darkmode">
  <div class="sheet-row sheet-header">
  <span>LANGUAGE PROFICIENCY</span>
  </div>
  </div></div><div class="message general" data-messageid="-M5JnuLXpFvXO4xqGLOK"><div class="sheet-rolltemplate-traits sheet-rolltemplate-darkmode">
  <div class="sheet-row sheet-header">
  <span>LANGUAGE PROFICIENCY</span>
  </div>
  <div class="sheet-row">
  <span class="sheet-desc">celestial</span>
  </div>
  </div></div><div class="message general you" data-messageid="-M5Jt2emR4EN5ttCCtT_"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:01PM</span><span class="by">DM (Kevin) (GM):</span><div class="sheet-rolltemplate-spell sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-title sheet-row">
  <span></span>
  </div>
  <div class="sheet-italics sheet-row">
  <span class="sheet-level">abjuration 1 </span> 
  </div>
  <div class="sheet-spacer"></div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="components:">Components:</span>
  <span>
  V,  S,
  M 
  </span>
  </div>
  <div class="sheet-spacer"></div>
  </div>
  </div></div><div class="message general you" data-messageid="-M5Jt38Njp60KigXS_bi"><div class="sheet-rolltemplate-spell sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-title sheet-row">
  <span></span>
  </div>
  <div class="sheet-italics sheet-row">
  <span class="sheet-level">abjuration 1 </span> 
  </div>
  <div class="sheet-spacer"></div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="components:">Components:</span>
  <span>
  V,  S,
  M 
  </span>
  </div>
  <div class="sheet-spacer"></div>
  </div>
  </div></div><div class="message general you" data-messageid="-M5Jt3vr_1H-tX0zh8ht"><div class="sheet-rolltemplate-spell sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-title sheet-row">
  <span></span>
  </div>
  <div class="sheet-italics sheet-row">
  <span class="sheet-level">abjuration 1 </span> 
  </div>
  <div class="sheet-spacer"></div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="components:">Components:</span>
  <span>
  V,  S,
  M 
  </span>
  </div>
  <div class="sheet-spacer"></div>
  </div>
  </div></div><div class="message general" data-messageid="-M5Jtr231-Et144hNiHf"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/6448269/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:05PM</span><span class="by">Nate:</span><div class="sheet-rolltemplate-traits sheet-rolltemplate-darkmode">
  <div class="sheet-row sheet-header">
  <span>OTHER PROFICIENCY</span>
  </div>
  </div></div><div class="message general" data-messageid="-M5Jtyr3dhVwhWeqLJpK"><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+5 = (<span class=&quot;basicdiceroll&quot;>2</span>)+5">7</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+5 = (<span class=&quot;basicdiceroll&quot;>11</span>)+5">16</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span> <span>(5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5Jtz2gb81bDH_whfKO"><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+5 = (<span class=&quot;basicdiceroll&quot;>18</span>)+5">23</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+5 = (<span class=&quot;basicdiceroll&quot;>14</span>)+5">19</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span> <span>(5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5JvBFYhept6nc2V-e1"><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d10+2[CON] = (<span class=&quot;basicdiceroll&quot;>4</span>)+2">6</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>HIT DICE <span>(D10+<span class="inlinerollresult showtip tipsy-n-right" title="Rolling 2[CON] = 2">2</span>)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5JvLnv56mi6RfdV8M4"><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d8+0[CON] = (<span class=&quot;basicdiceroll&quot;>5</span>)+0">5</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>HIT DICE <span>(D8+<span class="inlinerollresult showtip tipsy-n-right" title="Rolling 0[CON] = 0">0</span>)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5JvV54TswCO2G5pKbN"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:12PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d8+2[CON] = (<span class=&quot;basicdiceroll&quot;>7</span>)+2">9</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>HIT DICE <span>(D8+<span class="inlinerollresult showtip tipsy-n-right" title="Rolling 2[CON] = 2">2</span>)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5JzYau5g_N1vs3RODb"><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+0 = (<span class=&quot;basicdiceroll&quot;>12</span>)+0">12</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+0 = (<span class=&quot;basicdiceroll&quot;>16</span>)+0">16</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>SURVIVAL <span>(0)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5JzhgGumt2vczkte9R"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/6448269/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:31PM</span><span class="by">Nate:</span><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right fullfail" title="Rolling 1d20+4 = (<span class=&quot;basicdiceroll critfail &quot;>1</span>)+4">5</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+4 = (<span class=&quot;basicdiceroll&quot;>18</span>)+4">22</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>SURVIVAL <span>(4)</span></span>
  </div>
  </div>
  </div></div><div class="message rollresult player--M5JfTU2pktfKiG33rjC " data-messageid="-M5K-ylOMRLi_nTyY9Xn" data-playerid="-M5JfTU2pktfKiG33rjC"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:36PM</span><span class="by">Dorkus:</span><div class="formula" style="margin-bottom: 3px;">rolling d12</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d12"><div class="dicon"><div class="didroll">9</div><div class="backing"></div></div></div>)</div><div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">9</div></div><div class="message general" data-messageid="-M5K04a03pPBfaLYQLIT"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:37PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span>rolling d12</div><div class="message general you" data-messageid="-M5K06Kyt1qHajnMs3mS"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:37PM</span><span class="by">DM (Kevin) (GM):</span>"/r d12"</div><div class="message rollresult player--M5JggDSRG8XZJx38qJr " data-messageid="-M5K087FYok2Cm95hS3Y" data-playerid="-M5JggDSRG8XZJx38qJr"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:37PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="formula" style="margin-bottom: 3px;">rolling d12</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d12"><div class="dicon"><div class="didroll">2</div><div class="backing"></div></div></div>)</div><div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">2</div></div><div class="message rollresult player--M5JggDSRG8XZJx38qJr " data-messageid="-M5K0DRFkTbOmq63oCJ0" data-playerid="-M5JggDSRG8XZJx38qJr"><div class="formula" style="margin-bottom: 3px;">rolling d12</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d12"><div class="dicon"><div class="didroll">8</div><div class="backing"></div></div></div>)</div><div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">8</div></div><div class="message rollresult player--M5JggDSRG8XZJx38qJr " data-messageid="-M5K0MRh6yXN_-aVCOns" data-playerid="-M5JggDSRG8XZJx38qJr"><div class="formula" style="margin-bottom: 3px;">rolling d12</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d12"><div class="dicon"><div class="didroll">7</div><div class="backing"></div></div></div>)</div><div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">7</div></div><div class="message general" data-messageid="-M5K0nKJFI0zQvhZXpj4"><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+4 = (<span class=&quot;basicdiceroll&quot;>14</span>)+4">18</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+4 = (<span class=&quot;basicdiceroll&quot;>15</span>)+4">19</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>SURVIVAL <span>(4)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K1A02mafpnwlz7ea_"><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>15</span>)+2">17</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>8</span>)+2">10</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>PERCEPTION <span>(2)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K1BLdTvDFS_v2FTb-"><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+0 = (<span class=&quot;basicdiceroll&quot;>14</span>)+0">14</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+0 = (<span class=&quot;basicdiceroll&quot;>18</span>)+0">18</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>PERCEPTION <span>(0)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K2oYTUT-nSk0XsJ6l"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/6448269/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:48PM</span><span class="by">Nate:</span><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>12</span>)+2">14</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll critsuccess &quot;>20</span>)+2">22</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>PERCEPTION <span>(2)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K5Bqed2tVajdKP7o_"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:59PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>15</span>)+2">17</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>9</span>)+2">11</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>STEALTH <span>(2)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K5CNLTu4TR26WlGK6"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:59PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+7 = (<span class=&quot;basicdiceroll&quot;>11</span>)+7">18</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+7 = (<span class=&quot;basicdiceroll&quot;>4</span>)+7">11</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>STEALTH <span>(7)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K5CanXTshcYXEeqBM"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 5:59PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+1 = (<span class=&quot;basicdiceroll&quot;>12</span>)+1">13</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+1 = (<span class=&quot;basicdiceroll&quot;>9</span>)+1">10</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>STEALTH <span>(1)</span></span>
  </div>
  </div>
  </div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5K5TDjAuxWbm2n-cXi" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:00PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20-1</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">10</div><div class="backing"></div></div></div>)</div>-1<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">9</div></div><div class="message general" data-messageid="-M5K6I4szIHvRjteXg1e"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:04PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+1 = (<span class=&quot;basicdiceroll&quot;>9</span>)+1">10</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+1 = (<span class=&quot;basicdiceroll&quot;>4</span>)+1">5</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>ATHLETICS <span>(1)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K6zuEfSe3JajzB5nM"><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+3[INIT]  = (<span class=&quot;basicdiceroll&quot;>7</span>)+3">10</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>INITIATIVE <span>(3)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K72GJwuAOKJvxlEgj"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:07PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right fullfail" title="Rolling 1d20+2[INIT]  = (<span class=&quot;basicdiceroll critfail &quot;>1</span>)+2">3</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>INITIATIVE <span>(2)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K74DE0eb3QiuG05k-"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:07PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+1[INIT]  = (<span class=&quot;basicdiceroll&quot;>12</span>)+1">13</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>INITIATIVE <span>(1)</span></span>
  </div>
  </div>
  </div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5K7AI80woUycCiB1zj" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:08PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20+2</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">18</div><div class="backing"></div></div></div>)</div>+2<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">20</div></div><div class="message general you" data-messageid="-M5K7npQEeiZ4x0WiFz1"><div class="sheet-rolltemplate-spell sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-title sheet-row">
  <span>Shield of Faith</span>
  </div>
  <div class="sheet-italics sheet-row">
  <span class="sheet-level">abjuration 1 </span> 
  </div>
  <div class="sheet-spacer"></div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="casting-time:">Casting Time:</span>
  <span>1 bonus action</span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="range:">Range:</span> <span>60 feet</span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="target:">Target:</span>
  <span>A creature of your choice within range</span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="components:">Components:</span>
  <span>
  V,  S,
  M (A small parchment with a bit of holy text written on it)
  </span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="duration:">Duration:</span>
  <span><span data-i18n="concentration">Concentration</span>
  Up to 10 minutes</span>
  </div>
  <div class="sheet-spacer"></div>
  <div class="sheet-row">
  <span class="sheet-description">A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.</span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K82Mj1txDh7OEQcJw"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:11PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>18</span>)+3+2">23</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>9</span>)+3+2">14</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>30/120</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54toRA2gv7eYFKMsTd|repeating_attack_-M5Jo3h6yXrhfRi1gvbR_attack_dmg">Javelin</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K88bhBXorLId5qMN2"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:12PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 + 3[STR] = (<span class=&quot;basicdiceroll&quot;>3</span>)+3">6</span></span>
  <span class="sheet-sublabel">Piercing</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K8RooaAg5CJ0VA6An"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:13PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>12</span>)+3+2">17</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll critsuccess &quot;>20</span>)+3+2">25</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">
  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5K6i6UR3wxakuwrbmy_attack_crit">Shortbow</a> <span>(+5)</span></span>



  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K8fiM-pcio6HSOH5s"><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>14</span>)+3+2">19</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>9</span>)+3+2">14</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5K6i6UR3wxakuwrbmy_attack_dmg">Shortbow</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K8gyYnR3h7Od2V-ie"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 + 3[DEX] = (<span class=&quot;basicdiceroll&quot;>2</span>)+3">5</span> + <span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d6 = (<span class=&quot;basicdiceroll critsuccess &quot;>6</span>)">6</span></span>
  <span class="sheet-sublabel">Piercing</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K92U9AxwrSQ97uypH"><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+7 = (<span class=&quot;basicdiceroll&quot;>17</span>)+7">24</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+7 = (<span class=&quot;basicdiceroll&quot;>9</span>)+7">16</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>STEALTH <span>(7)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K930Xd9ISj7QE8_Oh"><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+7 = (<span class=&quot;basicdiceroll&quot;>17</span>)+7">24</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+7 = (<span class=&quot;basicdiceroll&quot;>14</span>)+7">21</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>STEALTH <span>(7)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K9CPBw-0HsZoh8_V0"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:16PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll critsuccess &quot;>20</span>)+2+2">24</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>3</span>)+2+2">7</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">


  <span><a href="~-M54tkpVE5MSgGEbhNMr|repeating_attack_-M5Jpf3lEJZMn7XTwZMr_attack_crit">Shortbow</a> <span>(+4)</span></span>

  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5K9LWaZ6YvUdmSV-D4"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/6448269/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:17PM</span><span class="by">Nate:</span><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 + 2[DEX] = (<span class=&quot;basicdiceroll&quot;>5</span>)+2">7</span> + <span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 = (<span class=&quot;basicdiceroll&quot;>2</span>)">2</span></span>
  <span class="sheet-sublabel">Piercing</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KChZUYRW2OynhzuoK"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:32PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2[INIT]  = (<span class=&quot;basicdiceroll&quot;>13</span>)+2">15</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>INITIATIVE <span>(2)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KCifZC1TDMaABt2MO"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:32PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+1[INIT]  = (<span class=&quot;basicdiceroll&quot;>13</span>)+1">14</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>INITIATIVE <span>(1)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KCjLEAWYl-4w3vqfA"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:32PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+3[INIT]  = (<span class=&quot;basicdiceroll&quot;>10</span>)+3">13</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>INITIATIVE <span>(3)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KCuiWlUBKCKUSC-Le"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:33PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-spell sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-title sheet-row">
  <span>Entangle</span>
  </div>
  <div class="sheet-italics sheet-row">
  <span class="sheet-level">abjuration 1 </span> 
  </div>
  <div class="sheet-spacer"></div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="casting-time:">Casting Time:</span>
  <span>1 action</span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="range:">Range:</span> <span>90 feet</span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="target:">Target:</span>
  <span>A point within range</span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="components:">Components:</span>
  <span>
  V,  S 
  </span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="duration:">Duration:</span>
  <span><span data-i18n="concentration">Concentration</span>
  Up to 1 minute</span>
  </div>
  <div class="sheet-spacer"></div>
  <div class="sheet-row">
  <span class="sheet-description">Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain. A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself. When the spell ends, the conjured plants wilt away.</span>
  </div>
  </div>
  </div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KELlQVMhq7p0h926d" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:39PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20-1</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">7</div><div class="backing"></div></div></div>)</div>-1<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">6</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KEPiNxTx8yG3Aduh-" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20-1</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">16</div><div class="backing"></div></div></div>)</div>-1<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">15</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KER9bMf1xaJTF0Z37" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20-1</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">9</div><div class="backing"></div></div></div>)</div>-1<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">8</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KEeET075cdVlsmyCA" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20+2</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">3</div><div class="backing"></div></div></div>)</div>+2<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">5</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KEfHIHoEllhe-tfJQ" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20+2</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">12</div><div class="backing"></div></div></div>)</div>+2<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">14</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KEfty4Ue5ogI4GjLW" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20+2</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">10</div><div class="backing"></div></div></div>)</div>+2<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">12</div></div><div class="message general" data-messageid="-M5KErkjTmw_qJ1Mb22-"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:41PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>8</span>)+3+2">13</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>5</span>)+3+2">10</span></span>
  </div>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54toRA2gv7eYFKMsTd|repeating_attack_-M5JnsH81XceJnu-Bg6y_attack_dmg">Mace</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KFC82mKaANivz33NS"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:43PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>10</span>)+3+2">15</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll critsuccess &quot;>20</span>)+3+2">25</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">
  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5K6i6UR3wxakuwrbmy_attack_crit">Shortbow</a> <span>(+5)</span></span>



  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KFDaGGSfI989N2pFS"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d6 + 3[DEX] = (<span class=&quot;basicdiceroll critsuccess &quot;>6</span>)+3">9</span> + <span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 = (<span class=&quot;basicdiceroll&quot;>5</span>)">5</span></span>
  <span class="sheet-sublabel">Piercing</span>
  </div>
  </div>
  </div>
  </div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KFTr7SzL9rDojm8TT" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:44PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20+4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">18</div><div class="backing"></div></div></div>)</div>+4<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">22</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KFYRtTQqbBTbA1QS_" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d6</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d6"><div class="dicon"><div class="didroll">4</div><div class="backing"></div></div></div>)</div><div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">4</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KFs8t22zjag2xifpb" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20+4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">7</div><div class="backing"></div></div></div>)</div>+4<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">11</div></div><div class="message general" data-messageid="-M5KG3aia9DuXpV7UtEQ"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:46PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>2</span>)+2+2">6</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll critsuccess &quot;>20</span>)+2+2">24</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">
  <span><a href="~-M54tkpVE5MSgGEbhNMr|repeating_attack_-M5Jpf3lEJZMn7XTwZMr_attack_crit">Shortbow</a> <span>(+4)</span></span>



  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KGV32cDW3Sdl9DBqL"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:48PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>12</span>)+3+2">17</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>18</span>)+3+2">23</span></span>
  </div>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54toRA2gv7eYFKMsTd|repeating_attack_-M5JnsH81XceJnu-Bg6y_attack_dmg">Mace</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KGX0ztGpvkVEw2Ruc"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d6 + 3[STR] = (<span class=&quot;basicdiceroll critsuccess &quot;>6</span>)+3">9</span></span>
  <span class="sheet-sublabel">Bludgeoning</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KGoBjsYhzHBQjnoKA"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:50PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right fullfail" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll critfail &quot;>1</span>)+3+2">6</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>18</span>)+3+2">23</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5K6i6UR3wxakuwrbmy_attack_dmg">Shortbow</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KH8qBV0xp3iUi5uPD" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:51PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20+4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">14</div><div class="backing"></div></div></div>)</div>+4<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">18</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KHD8iRe55veVScyW1" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20-1</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">14</div><div class="backing"></div></div></div>)</div>-1<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">13</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KHIP_o06a-Xtnq7vK" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20+4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">11</div><div class="backing"></div></div></div>)</div>+4<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">15</div></div><div class="message general" data-messageid="-M5KHaHOYvgXHowwixOZ"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:53PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>14</span>)+2+2">18</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>16</span>)+2+2">20</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tkpVE5MSgGEbhNMr|repeating_attack_-M5Jpf3lEJZMn7XTwZMr_attack_dmg">Shortbow</a> <span>(+4)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KHbY7I8m5UlFmYDJg"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right fullfail" title="Rolling 1d6 + 2[DEX] = (<span class=&quot;basicdiceroll critfail &quot;>1</span>)+2">3</span></span>
  <span class="sheet-sublabel">Piercing</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KHsKOv_5PqMiYwckf"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:54PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>2</span>)+3+2">7</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>3</span>)+3+2">8</span></span>
  </div>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54toRA2gv7eYFKMsTd|repeating_attack_-M5JnsH81XceJnu-Bg6y_attack_dmg">Mace</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KI1GJUowYIdIrkXh1"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:55PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>9</span>)+3+2">14</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>6</span>)+3+2">11</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5K6i6UR3wxakuwrbmy_attack_dmg">Shortbow</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KI7gNgXeM0cE0fcsN" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:55PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20+4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">4</div><div class="backing"></div></div></div>)</div>+4<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">8</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KIBOUeXIzUMWs2GQN" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d6</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d6 critsuccess "><div class="dicon"><div class="didroll">6</div><div class="backing"></div></div></div>)</div><div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">6</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KIFtSlkfiytgpFxcr" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20+4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">4</div><div class="backing"></div></div></div>)</div>+4<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">8</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KIMWV9ZYg2WAijeZW" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20+4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">4</div><div class="backing"></div></div></div>)</div>+4<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">8</div></div><div class="message general" data-messageid="-M5KIc57ZbKGaAR3YhIW"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:58PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>11</span>)+2+2">15</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>5</span>)+2+2">9</span></span>
  </div>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tkpVE5MSgGEbhNMr|repeating_attack_-M5JpgjFE0x5doEBZWX4_attack_dmg">Quarterstaff (Two-Handed)</a> <span>(+4)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KIdo7pPvCiYUt89qT"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d8 + 2[DEX] = (<span class=&quot;basicdiceroll&quot;>7</span>)+2">9</span></span>
  <span class="sheet-sublabel">Bludgeoning</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KIrMEEMm3D_oRh1Em"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:59PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>4</span>)+3+2">9</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>19</span>)+3+2">24</span></span>
  </div>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54toRA2gv7eYFKMsTd|repeating_attack_-M5JnsH81XceJnu-Bg6y_attack_dmg">Mace</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KJ0G4yOVvGbTqrpvW"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 6:59PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>9</span>)+3+2">14</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>4</span>)+3+2">9</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5K6i6UR3wxakuwrbmy_attack_dmg">Shortbow</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KJBw1NzX3zm7Cwjt3" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:00PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20+4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">15</div><div class="backing"></div></div></div>)</div>+4<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">19</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KJEsWRS9OeBoF-uu7" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20+4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">2</div><div class="backing"></div></div></div>)</div>+4<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">6</div></div><div class="message general" data-messageid="-M5KJb7kSvfk6mU66c81"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:02PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>15</span>)+2+2">19</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>6</span>)+2+2">10</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tkpVE5MSgGEbhNMr|repeating_attack_-M5Jpf3lEJZMn7XTwZMr_attack_dmg">Shortbow</a> <span>(+4)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KJceobKmhzMndfDWd"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 + 2[DEX] = (<span class=&quot;basicdiceroll&quot;>2</span>)+2">4</span></span>
  <span class="sheet-sublabel">Piercing</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KJcnaL4NXXMzFuUoC"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 + 2[DEX] = (<span class=&quot;basicdiceroll&quot;>5</span>)+2">7</span></span>
  <span class="sheet-sublabel">Piercing</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KJkKBaf4kEbMr8shI"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:02PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>8</span>)+3+2">13</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>15</span>)+3+2">20</span></span>
  </div>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54toRA2gv7eYFKMsTd|repeating_attack_-M5JnsH81XceJnu-Bg6y_attack_dmg">Mace</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KJvBGptUNESN-WY3U"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:03PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>15</span>)+3+2">20</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>13</span>)+3+2">18</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5K6i6UR3wxakuwrbmy_attack_dmg">Shortbow</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KJwqT5qo4On4GrAjH"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 + 3[DEX] = (<span class=&quot;basicdiceroll&quot;>2</span>)+3">5</span></span>
  <span class="sheet-sublabel">Piercing</span>
  </div>
  </div>
  </div>
  </div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KK1GDldu8UPSVmVmA" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:04PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20+4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20 critsuccess "><div class="dicon"><div class="didroll">20</div><div class="backing"></div></div></div>)</div>+4<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">24</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KK4362D8ubdEGbgB-" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling 2d6+2</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d6"><div class="dicon"><div class="didroll">3</div><div class="backing"></div></div>+</div><div data-origindex="1" class="diceroll d6"><div class="dicon"><div class="didroll">3</div><div class="backing"></div></div></div>)</div>+2<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">8</div></div><div class="message general" data-messageid="-M5KKM4ecgmxHo__pdJQ"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:05PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d8 + 2[WIS] = (<span class=&quot;basicdiceroll&quot;>3</span>)+2">5</span></span>
  <span class="sheet-sublabel">Healing</span>
  </div>
  </div>
  <div class="sheet-sublabel" style="color: black">
  <span>Touch</span>
  </div>
  <div class="sheet-label">
  <span>Cure Wounds</span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KKTU_81mT_QXGTBfc"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:06PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll critsuccess &quot;>20</span>)+3+2">25</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right fullfail" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll critfail &quot;>1</span>)+3+2">6</span></span>
  </div>
  </div>
  <div class="sheet-label">


  <span><a href="~-M54toRA2gv7eYFKMsTd|repeating_attack_-M5JnsH81XceJnu-Bg6y_attack_crit">Mace</a> <span>(+5)</span></span>

  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KKV1IttJqCHuMrQVw"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 + 3[STR] = (<span class=&quot;basicdiceroll&quot;>2</span>)+3">5</span> + <span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 = (<span class=&quot;basicdiceroll&quot;>5</span>)">5</span></span>
  <span class="sheet-sublabel">Bludgeoning</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KLlXsiGNCAhDzmRUA"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:11PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+7 = (<span class=&quot;basicdiceroll&quot;>10</span>)+7">17</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+7 = (<span class=&quot;basicdiceroll&quot;>5</span>)+7">12</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>STEALTH <span>(7)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KM3LoNKj-HxTKagRc"><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+5 = (<span class=&quot;basicdiceroll&quot;>10</span>)+5">15</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+5 = (<span class=&quot;basicdiceroll&quot;>9</span>)+5">14</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>DEXTERITY SAVE <span>(5)</span></span>
  </div>
  </div>
  </div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KM5wa0qyWUmHxRITf" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:13PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d8</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d8"><div class="dicon"><div class="didroll">7</div><div class="backing"></div></div></div>)</div><div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">7</div></div><div class="message general" data-messageid="-M5KMVuKH3gS-BKyntXd"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:15PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>19</span>)+2">21</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>6</span>)+2">8</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>PERCEPTION <span>(2)</span></span>
  </div>
  </div>
  </div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KMn3salCKVngJTZV4" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:16PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20+1</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">10</div><div class="backing"></div></div></div>)</div>+1<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">11</div></div><div class="message general" data-messageid="-M5KMs8ClpKwcXpYvTOQ"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:16PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>3</span>)+2">5</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>8</span>)+2">10</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>NATURE <span>(2)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KNuhUt2bf-tR65oHX"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:21PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+1[INIT]  = (<span class=&quot;basicdiceroll&quot;>8</span>)+1">9</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>INITIATIVE <span>(1)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KNwWr1pKsHU6iLjS_"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:21PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2[INIT]  = (<span class=&quot;basicdiceroll&quot;>2</span>)+2">4</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>INITIATIVE <span>(2)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KNy_R398Rtlb3fW5r"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:21PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+3[INIT]  = (<span class=&quot;basicdiceroll&quot;>16</span>)+3">19</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>INITIATIVE <span>(3)</span></span>
  </div>
  </div>
  </div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KO1FLcbsMyRHm8a76" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:21PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20+2</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20 critfail "><div class="dicon"><div class="didroll">1</div><div class="backing"></div></div></div>)</div>+2<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">3</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KO3r-bxQt0V8tNF1C" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20+2</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">5</div><div class="backing"></div></div></div>)</div>+2<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">7</div></div><div class="message general" data-messageid="-M5KOLdCqkzzMJpwkf3u"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:23PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>8</span>)+3+2">13</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right fullfail" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll critfail &quot;>1</span>)+3+2">6</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5K6i6UR3wxakuwrbmy_attack_dmg">Shortbow</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KOq80umomB5sSx1hD"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:25PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-spell sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-title sheet-row">
  <span>Divine Favor</span>
  </div>
  <div class="sheet-italics sheet-row">
  <span class="sheet-level">abjuration 1 </span> 
  </div>
  <div class="sheet-spacer"></div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="casting-time:">Casting Time:</span>
  <span>1 bonus action</span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="range:">Range:</span> <span>Self</span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="target:">Target:</span>
  <span>Self</span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="components:">Components:</span>
  <span>
  V,  S 
  </span>
  </div>
  <div class="sheet-row">
  <span class="sheet-bold" data-i18n="duration:">Duration:</span>
  <span><span data-i18n="concentration">Concentration</span>
  Up to 1 minute</span>
  </div>
  <div class="sheet-spacer"></div>
  <div class="sheet-row">
  <span class="sheet-description">Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.</span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KOvIzE_C5CbD3UTyq"><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>3</span>)+3+2">8</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>14</span>)+3+2">19</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>30/120</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54toRA2gv7eYFKMsTd|repeating_attack_-M5Jo3h6yXrhfRi1gvbR_attack_dmg">Javelin</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KOziGTvH3xS7tXYVw"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d6 + 3[STR] = (<span class=&quot;basicdiceroll critsuccess &quot;>6</span>)+3">9</span></span>
  <span class="sheet-sublabel">Piercing</span>
  </div>
  </div>
  </div>
  </div></div><div class="message rollresult player--M5JggDSRG8XZJx38qJr " data-messageid="-M5KP1P7ZToC-65s_4cu" data-playerid="-M5JggDSRG8XZJx38qJr"><div class="formula" style="margin-bottom: 3px;">rolling d4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d4"><div class="dicon"><div class="didroll">3</div><div class="backing"></div></div></div>)</div><div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">3</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KPsvo7QBC6SEX2-lh" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:29PM</span><span class="by">DM (Kevin) (GM):</span><div class="formula" style="margin-bottom: 3px;">rolling d20-1</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">4</div><div class="backing"></div></div></div>)</div>-1<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">3</div></div><div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KPvz5iLAvg_9ghikf" data-playerid="-M54pm-khgKWF5-SLCa3"><div class="formula" style="margin-bottom: 3px;">rolling d20+2</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d20"><div class="dicon"><div class="didroll">8</div><div class="backing"></div></div></div>)</div>+2<div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">10</div></div><div class="message general" data-messageid="-M5KQCVTPuFuig3BAJCh"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:31PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>12</span>)+3+2">17</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>12</span>)+3+2">17</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5K6i6UR3wxakuwrbmy_attack_dmg">Shortbow</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KQEFdm0STjtBbrncH"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d6 + 3[DEX] = (<span class=&quot;basicdiceroll critsuccess &quot;>6</span>)+3">9</span></span>
  <span class="sheet-sublabel">Piercing</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KQZHZBzsHIrocrSUy"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:32PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>18</span>)+3+2">23</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>19</span>)+3+2">24</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>30/120</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54toRA2gv7eYFKMsTd|repeating_attack_-M5Jo3h6yXrhfRi1gvbR_attack_dmg">Javelin</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KQaYPjLJKJKhGYZ8m"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 + 3[STR] = (<span class=&quot;basicdiceroll&quot;>4</span>)+3">7</span></span>
  <span class="sheet-sublabel">Piercing</span>
  </div>
  </div>
  </div>
  </div></div><div class="message rollresult player--M5JggDSRG8XZJx38qJr " data-messageid="-M5KQcsJhKY_g3tUsRMr" data-playerid="-M5JggDSRG8XZJx38qJr"><div class="formula" style="margin-bottom: 3px;">rolling d4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d4"><div class="dicon"><div class="didroll">3</div><div class="backing"></div></div></div>)</div><div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">3</div></div><div class="message general" data-messageid="-M5KQxtBKSY_o78ZZoYP"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:34PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>6</span>)+2+2">10</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>2</span>)+2+2">6</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tkpVE5MSgGEbhNMr|repeating_attack_-M5Jpf3lEJZMn7XTwZMr_attack_dmg">Shortbow</a> <span>(+4)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KROz3Eq5s7E30hrnA"><div class="sheet-rolltemplate-simple sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>16</span>)+2">18</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>4</span>)+2">6</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>DEXTERITY SAVE <span>(2)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KRXhfJdgi6N5aWIOu"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:36PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>6</span>)+3+2">11</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right fullfail" title="Rolling 1d20cs>20 + 3[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll critfail &quot;>1</span>)+3+2">6</span></span>
  </div>
  </div>
  <div class="sheet-sublabel">
  <span>80/320</span>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54tqmq4494_zEFm2dP|repeating_attack_-M5K6i6UR3wxakuwrbmy_attack_dmg">Shortbow</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KRdndjEe03jEWO58I"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/125008240/d6EJg-iOP1jFOZYFaeSbyg/med.jpg?1587335338"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:37PM</span><span class="by">Torenx:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>16</span>)+3+2">21</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 3[STR] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>15</span>)+3+2">20</span></span>
  </div>
  </div>
  <div class="sheet-label">



  <span><a href="~-M54toRA2gv7eYFKMsTd|repeating_attack_-M5JnsH81XceJnu-Bg6y_attack_dmg">Mace</a> <span>(+5)</span></span>
  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KRhPons84HFC0apC7"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d6 + 3[STR] = (<span class=&quot;basicdiceroll&quot;>2</span>)+3">5</span></span>
  <span class="sheet-sublabel">Bludgeoning</span>
  </div>
  </div>
  </div>
  </div></div><div class="message rollresult player--M5JggDSRG8XZJx38qJr " data-messageid="-M5KRjLDV1wQvEukg7LB" data-playerid="-M5JggDSRG8XZJx38qJr"><div class="formula" style="margin-bottom: 3px;">rolling d4</div><div class="clear"></div><div class="formula formattedformula"><div class="dicegrouping" data-groupindex="0">(<div data-origindex="0" class="diceroll d4 critfail "><div class="dicon"><div class="didroll">1</div><div class="backing"></div></div></div>)</div><div class="clear"></div></div><div class="clear"></div><strong>=</strong><div class="rolled">1</div></div><div class="message general" data-messageid="-M5KRvD2QyiBbb_rqkPm"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="https://s3.amazonaws.com/files.d20.io/images/124622769/JT_1DJcXDpnbZ_V3tNqVUg/med.jpg?1587270462"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:38PM</span><span class="by">Ellywick 'Stumbleduck' Timbers:</span><div class="sheet-rolltemplate-atk sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right fullcrit" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll critsuccess &quot;>20</span>)+2+2">24</span></span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20cs>20 + 2[DEX] + 2[PROF] = (<span class=&quot;basicdiceroll&quot;>16</span>)+2+2">20</span></span>
  </div>
  </div>
  <div class="sheet-label">


  <span><a href="~-M54tkpVE5MSgGEbhNMr|repeating_attack_-M5JpgjFE0x5doEBZWX4_attack_crit">Quarterstaff (Two-Handed)</a> <span>(+4)</span></span>

  </div>
  </div>
  </div></div><div class="message general" data-messageid="-M5KRwzuqUXuSDlLAOd9"><div class="sheet-rolltemplate-dmg sheet-rolltemplate-darkmode">

  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage"><span class="inlinerollresult showtip tipsy-n-right fullfail" title="Rolling 1d8 + 2[DEX] = (<span class=&quot;basicdiceroll critfail &quot;>1</span>)+2">3</span> + <span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d8 = (<span class=&quot;basicdiceroll&quot;>2</span>)">2</span></span>
  <span class="sheet-sublabel">Bludgeoning</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general you" data-messageid="-M5KT07CYCT0RDkK94gu"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:43PM</span><span class="by">DM (Kevin) (GM):</span>"If you are to keep this, you must first give it to me."</div><div class="message general" data-messageid="-M5KTPxchVMyydMeS9YY"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/4095658/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:45PM</span><span class="by">Dorkus:</span><div class="sheet-rolltemplate-skill sheet-rolltemplate-darkmode">
  <div class="sheet-container">
  <div class="sheet-result">
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>6</span>)+2">8</span></span>
  </div>
  <div class="userscript-roll">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20+2 = (<span class=&quot;basicdiceroll&quot;>8</span>)+2">10</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>PERCEPTION <span>(2)</span></span>
  </div>
  </div>
  </div></div><div class="message general you" data-messageid="-M5KUIolTKsMXpxky7hE"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:49PM</span><span class="by">DM (Kevin) (GM):</span>32gp and 3 green gems</div><div class="message general you" data-messageid="-M5KUJsUxN-juwCY5cBn">2 potions of healing</div><div class="message general you" data-messageid="-M5KVGrrxEUDgdpGTSH3">KILL COUNT</div><div class="message general you" data-messageid="-M5KVGs02pZeBxzIlEIr">Dorkus</div><div class="message general you" data-messageid="-M5KVGsBhhlTFB-Ud7m7">	goblin x3</div><div class="message general you" data-messageid="-M5KVGsJpacXQw_01_AA">Torenx</div><div class="message general you" data-messageid="-M5KVGsR3Gv2U_uN91So"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">April 19, 2020 7:53PM</span><span class="by">DM (Kevin) (GM):</span>	goblin</div><div class="message general you" data-messageid="-M5KVGsZA6STRjnsx12-">	bugbear</div><div class="message general you" data-messageid="-M5KVGsf-yE7FKm8J9r2">Ellywick</div><div class="message general you" data-messageid="-M5KVGsm-rFquC_a0Uch">	goblin x2</div><div class="message general you" data-messageid="-M5KVGsswCE5jC_MrhRC">	goblin shaman</div><div class="message general you" data-messageid="-M_mFi1EwBXhi1f5X6SY"><div class="sheet-rolltemplate-traits sheet-rolltemplate-darkmode">
  <div class="sheet-row sheet-header">
  <span>Round 1: When you see it, it sees you too</span>
  </div>
  <div class="sheet-row sheet-subheader">
  <span class="sheet-italics">
  trait
  </span>
  </div>
  <div class="sheet-row">
  <span class="sheet-desc">Round 1: When you see it, it sees you too. As the adventurers war with this being from a far realm of unknowable horror, light seems to fade. Five player characters have to make a WIS DC 15 save. If they fail, they can only see up to ten feet away. Effected characters reroll the save on their next turn to see if they can break free.</span>
  </div>
  </div></div><div class="message general you" data-messageid="-M_mFp0puAT4W8ll6sRk"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">May 15, 2021 4:01PM</span><span class="by">DM (Kevin) (GM):</span><div class="sheet-rolltemplate-traits sheet-rolltemplate-darkmode">
  <div class="sheet-row sheet-header">
  <span>Round 2: When you hear it, it hears you too</span>
  </div>
  <div class="sheet-row sheet-subheader">
  <span class="sheet-italics">
  trait
  </span>
  </div>
  <div class="sheet-row">
  <span class="sheet-desc">Round 2: When you hear it, it hears you too. All players still effected by the previous villian action have to make another WIS DC 15 saving throw. If they fail, their perception of reality begins to slip as the aboleth telepathically digs into their mind and they are Frightened.</span>
  </div>
  </div></div><div class="message general you" data-messageid="-M_mFtJ6Q1Pcc8cjGkZm"><div class="sheet-rolltemplate-traits sheet-rolltemplate-darkmode">
  <div class="sheet-row sheet-header">
  <span>Round 3: When you feel it, it touches you</span>
  </div>
  <div class="sheet-row sheet-subheader">
  <span class="sheet-italics">
  trait
  </span>
  </div>
  <div class="sheet-row">
  <span class="sheet-desc">Round 3: When you feel it, it touches you. Players who are frightened of the Aboleth roll another WIS DC 13 saving throw. If they fail, their fear consumes them and they are subjected to short-term madness. Roll on the short-term madness table.</span>
  </div>
  </div></div><div class="message general you" data-messageid="-M_mFu9LlDy3UvToocEX"><div class="sheet-rolltemplate-traits sheet-rolltemplate-darkmode">
  <div class="sheet-row sheet-header">
  <span>Round 4: When it calls you, it has you</span>
  </div>
  <div class="sheet-row sheet-subheader">
  <span class="sheet-italics">
  trait
  </span>
  </div>
  <div class="sheet-row">
  <span class="sheet-desc">Round 4: When it calls you, it has you. The Aboleth grapples four characters within 10 feet of it and submerges itself, taking them with it. Targeted characters must make a DC 15 Strength check. If they succeed, they are not pulled under. If they fail, they are pulled under and are subjected to the effects of the Mucous Cloud.</span>
  </div>
  </div></div><div class="message general you" data-messageid="-M_mG-QClI2BAIEkK7hf"><div class="sheet-rolltemplate-atkdmg sheet-rolltemplate-darkmode">
  <div class="sheet-container sheet-atk">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20 +9 = (<span class=&quot;basicdiceroll&quot;>10</span>)+9">19</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>Tentacle <span>(+9)</span></span>
  </div>
  <div class="sheet-charname">
  <span>Mhegr'gnalbh, The Hidden Titan</span>
  </div>
  </div>
  <div class="sheet-container sheet-desc sheet-save">
  <div class="sheet-savedc">
  <span class="sheet-rolltemplate-inline" data-i18n="difficulty-class-abv">DC</span><span class="sheet-rolltemplate-inline">14</span>
  </div>
  <div class="sheet-label">
  <span class="sheet-rolltemplate-inline">Constitution</span> <span class="sheet-rolltemplate-inline" data-i18n="save">Save</span>
  </div>
  </div>
  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-adv">
  <span class="sheet-damage">
  <span class="inlinerollresult showtip tipsy-n-right fullfail" title="Rolling 2d8 + 5 = (<span class=&quot;basicdiceroll&quot;>5</span>+<span class=&quot;basicdiceroll critfail &quot;>1</span>)+5">11</span>

  </span>
  <span class="sheet-sublabel">bludgeoning</span>
  </div>
  <div class="sheet-advspacer"></div>
  <div class="sheet-adv">
  <span>
  <span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d12 = (<span class=&quot;basicdiceroll&quot;>7</span>)">7</span>

  </span>
  <span class="sheet-sublabel">acid</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general you" data-messageid="-M_mG3_e16fp4-cOdK5g"><div class="sheet-rolltemplate-atkdmg sheet-rolltemplate-darkmode">
  <div class="sheet-container sheet-atk">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span><span class="inlinerollresult showtip tipsy-n-right" title="Rolling 1d20 +9 = (<span class=&quot;basicdiceroll&quot;>6</span>)+9">15</span></span>
  </div>
  </div>
  <div class="sheet-label">
  <span>Tail <span>(+9)</span></span>
  </div>
  <div class="sheet-charname">
  <span>Mhegr'gnalbh, The Hidden Titan</span>
  </div>
  </div>
  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage">
  <span class="inlinerollresult showtip tipsy-n-right importantroll" title="Rolling 4d8 + 5 = (<span class=&quot;basicdiceroll critfail &quot;>1</span>+<span class=&quot;basicdiceroll critsuccess &quot;>8</span>+<span class=&quot;basicdiceroll critsuccess &quot;>8</span>+<span class=&quot;basicdiceroll critfail &quot;>1</span>)+5">23</span>

  </span>
  <span class="sheet-sublabel">bludgeoning</span>
  </div>
  </div>
  </div>
  </div></div><div class="message general you" data-messageid="-M_mG7Zzoa29STt7WMAB"><div class="sheet-rolltemplate-traits sheet-rolltemplate-darkmode">
  <div class="sheet-row sheet-header">
  <span>Chaos Clock</span>
  </div>
  <div class="sheet-row sheet-subheader">
  <span class="sheet-italics">
  trait
  </span>
  </div>
  <div class="sheet-row">
  <span class="sheet-desc">Chaos Clock. After all turns have been taken in the initiative round, the aboleth rerolls its initiative and uses that value for the next round of initiative.</span>
  </div>
  </div></div><div class="message general you" data-messageid="-M_mG9p7ga2PG2It3zkn"><div class="spacer"></div><div class="avatar" aria-hidden="true"><img src="/users/avatar/124211/30"></div><span class="tstamp" aria-hidden="true">May 15, 2021 4:02PM</span><span class="by">DM (Kevin) (GM):</span><div class="sheet-rolltemplate-atkdmg sheet-rolltemplate-darkmode">
  <div class="sheet-container sheet-atk sheet-save">
  <div class="sheet-savedc">
  <span class="sheet-rolltemplate-inline" data-i18n="difficulty-class-abv">DC</span><span class="sheet-rolltemplate-inline">14</span>
  </div>
  <div class="sheet-label">
  <span class="sheet-rolltemplate-inline">Wisdom</span> <span class="sheet-rolltemplate-inline" data-i18n="save">Save</span>
  </div>
  </div>
  </div></div><div class="message general you" data-messageid="-M_mGAh63Vh4SsTJdOO4"><div class="sheet-rolltemplate-atkdmg sheet-rolltemplate-darkmode">
  <div class="sheet-container sheet-atk sheet-save">
  <div class="sheet-savedc">
  <span class="sheet-rolltemplate-inline" data-i18n="difficulty-class-abv">DC</span><span class="sheet-rolltemplate-inline">14</span>
  </div>
  <div class="sheet-label">
  <span class="sheet-rolltemplate-inline">Wisdom</span> <span class="sheet-rolltemplate-inline" data-i18n="save">Save</span>
  </div>
  </div>
  </div></div><div class="message general you" data-messageid="-M_mGBhCZT0MlZU2X1e-"><div class="sheet-rolltemplate-traits sheet-rolltemplate-darkmode">
  <div class="sheet-row sheet-header">
  <span>Tail Swipe</span>
  </div>
  <div class="sheet-row sheet-subheader">
  <span class="sheet-italics">
  trait
  </span>
  </div>
  <div class="sheet-row">
  <span class="sheet-desc">Tail Swipe. The aboleth makes one tail attack.</span>
  </div>
  </div></div><div class="message general you" data-messageid="-M_mGCiky6ubQgOh2BGI"><div class="sheet-rolltemplate-atkdmg sheet-rolltemplate-darkmode">
  <div class="sheet-container sheet-damagetemplate">
  <div class="sheet-result">
  <div class="sheet-solo">
  <span class="sheet-damage">
  <span class="inlinerollresult showtip tipsy-n-right fullfail" title="Rolling 3d6 = (<span class=&quot;basicdiceroll&quot;>4</span>+<span class=&quot;basicdiceroll&quot;>5</span>+<span class=&quot;basicdiceroll critfail &quot;>1</span>)">10</span>
  </span>
  <span class="sheet-sublabel">psychic</span>
  </div>
  </div>
  <div class="sheet-label">
  <span>Psychic Drain</span>
  </div>
  <div class="sheet-charname">
  <span>Mhegr'gnalbh, The Hidden Titan</span>
  </div>
  </div>
  </div></div><div class="message general you" data-messageid="-M_mH3TyKUD3gC13Fmq9"><a href="https://media-waterdeep.cursecdn.com/avatars/thumbnails/17712/209/1000/1000/637567167815230710.jpeg#.png"><img src="https://imgsrv.roll20.net/?src=https%3A//media-waterdeep.cursecdn.com/avatars/thumbnails/17712/209/1000/1000/637567167815230710.jpeg%23.png" alt="x"></a></div>
  </div>`;

interface IRollGenerationParameter {
  rollerName: string,
  rolls: Record<DiceRollType, number>
}

export const generateRoll20Chat = (rollGenerationParameters: IRollGenerationParameter[], includeStackedDiceRolls: boolean = false): string => {
  const messagesHtml: string[] = [];

  for (const rollGenerationParameter of rollGenerationParameters) {
    for (const diceRollTypeToAdd in rollGenerationParameter.rolls) {
      const numberOfDiceRollTypeToAdd = rollGenerationParameter.rolls[diceRollTypeToAdd] as number;

      messagesHtml.push(...generateStackedStandardDiceRollMessages(diceRollTypeToAdd, rollGenerationParameter.rollerName, numberOfDiceRollTypeToAdd));
    }
  }

  const rollerNames = Object.keys(rollGenerationParameters);
  const nonDiceRollMessageCount = Math.ceil(messagesHtml.length / 4);
  for (let i = 0; i < Math.ceil(nonDiceRollMessageCount / 2); i++) {
    shuffle(rollerNames);
    messagesHtml.push(generateBasicTextMessage(rollerNames[0]));
  }

  for (let i = 0; i < Math.ceil(nonDiceRollMessageCount / 2); i++) {
    shuffle(rollerNames);
    messagesHtml.push(generateTemplatedSpellInfoMessage(rollerNames[0]));
  }

  return `<div class="content">${messagesHtml.join()}<div/>`;
};

const generateStackedStandardDiceRollMessages = (diceRollType: DiceRollType, rollerName: string, stackedMessageCount: number = 0): string[] => {
  const results: string[] = [];

  results.push(generateStandardDiceRollMessage(diceRollType, rollerName));

  if (stackedMessageCount > 1) {
    for (let index = 1; index < stackedMessageCount; index++) {
      results.push(generateStandardDiceRollMessage(diceRollType));
    }
  }

  return results;
};

const generateStandardDiceRollMessage = (diceRollType: DiceRollType, rollerName?: string): string => {
  /**
   * @summary Matches a dice roll formula.
   * @returns Match array indices
   * - 0: entire string; "d20"
   * - 1: dice type number; "20"
   */
  const diceRollRegex = /d(\d+)/;
  const numberFormatLocaleString = 'en-US';
  const numberFormatSignDisplay = 'always';

  const regexMatches = diceRollType.match(diceRollRegex);

  if (!regexMatches) {
    throw new RangeError(`Unable to match DiceRollType from '${diceRollType}'`);
  }

  const diceTypeNumber = +regexMatches[1];
  const rollResult = Math.floor(Math.random() * diceTypeNumber + 1);

  const rollModifier = Math.floor(Math.random() * 10) * (Math.random() < 0.5 ? -1 : 1);
  const numberWithSignFormatter = new Intl.NumberFormat(
    numberFormatLocaleString,
    {
      signDisplay: numberFormatSignDisplay
    });

  return `<div class="message rollresult you player--M54pm-khgKWF5-SLCa3 " data-messageid="-M5KELlQVMhq7p0h926d" data-playerid="-M54pm-khgKWF5-SLCa3">
    ${!!rollerName
      ? `<div class="spacer"></div>
      <div class="avatar" aria-hidden="true">
      <img src="/users/avatar/124211/30">
      </div>
      <span class="tstamp" aria-hidden="true">April 19, 2020 6:39PM</span>
      <span class="by">${rollerName}:</span>`
      : ''}
    <div class="formula" style="margin-bottom: 3px;">rolling ${diceRollType}${numberWithSignFormatter.format(rollModifier)}</div>
    <div class="clear"></div>
    <div class="formula formattedformula">
    <div class="dicegrouping" data-groupindex="0">
    (
    <div data-origindex="0" class="diceroll ${diceRollType}">
    <div class="dicon">
    <div class="didroll">${rollResult}</div>
    <div class="backing"></div>
    </div>
    </div>
    )
    </div>
    ${rollModifier}
    <div class="clear"></div>
    </div>
    <div class="clear"></div>
    <strong>=</strong>
    <div class="rolled">${rollResult + rollModifier}</div>
    </div>`;
}

const generateBasicTextMessage = (rollerName: string): string => {
  return `<div class="message general" data-messageid="-N-fSeo03S720qYBCHab">
    <div class="spacer"></div>
    <div class="avatar" aria-hidden="true">
    <img src="/users/avatar/4285197/30">
    </div>
    <span class="tstamp" aria-hidden="true">April 14, 2022 9:23PM</span>
    <span class="by">${rollerName}:</span>
    This is a basic text message
    </div>`;
};

const generateTemplatedSpellInfoMessage = (rollerName: string): string => {
  return `<div class="message general you" data-messageid="-N-fWZeDkT5LFK11RtEZ">
    <div class="spacer"></div>
    <div class="avatar" aria-hidden="true">
    <img src="/users/avatar/124211/30">
    </div>
    <span class="tstamp" aria-hidden="true">April 19, 2020 6:39PM</span>
    <span class="by">${rollerName}:</span>
    <div class="sheet-rolltemplate-dmg">
    <div class="sheet-atk sheet-save">
    <div class="sheet-savedc">
    <span class="sheet-rolltemplate-inline" data-i18n="difficulty-class-abv">DC</span>
    <span class="sheet-rolltemplate-inline"><span class="inlinerollresult showtip tipsy-n-right" original-title="Rolling 15[SAVE] = 15">15</span></span>
    </div>
    <div class="sheet-label">
    <span class="sheet-rolltemplate-inline">Dexterity</span> 
    <span class="sheet-rolltemplate-inline" data-i18n="save">Save</span>
    </div>
    </div>
    <div class="sheet-container sheet-damagetemplate">
    <div class="sheet-result">
    <div class="sheet-solo">
    <span class="sheet-damage">
    <span class="inlinerollresult showtip tipsy-n-right" original-title="<img src=&quot;/images/quantumrollwhite.png&quot; class=&quot;inlineqroll&quot;> Rolling 2d8 = (<span class=&quot;basicdiceroll&quot;>4</span>+<span class=&quot;basicdiceroll&quot;>2</span>)">6</span>
    </span>
    <span class="sheet-sublabel">Radiant</span>
    </div>
    </div>
    <div class="sheet-sublabel" style="color: black">
    <span>60 feet</span>
    </div>
    <div class="sheet-label">
    <span>Sacred Flame</span>
    </div>
    <div class="sheet-spelldesc-link">
    <span>
    <a href="~-LbQrFP_zpSdILJ18bPw|repeating_attack_-LcETGSGPNcdiAj8STiZ_spelldesc_link">Show Spell Description</a>
    </span>
    </div>
    </div>
    </div>
    </div>`;
};

// Fisher-Yates shuffle algorithm.
const shuffle = (array: string[]): void => {
  for (let i = array.length - 1; i > 0; i--) {
    // random index from 0 to i.
    let j = Math.floor(Math.random() * (i + 1));

    // swap elements array[i] and array[j]
    // Using 'destructuring assignment' syntax.
    // Same could be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
};