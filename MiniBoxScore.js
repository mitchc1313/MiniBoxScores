if(void 0 === mini_offseason_hide) var mini_offseason_hide = !1;
if(void 0 === deactivate_all_offseason) var deactivate_all_offseason = !1;
if(is_offseason && mini_offseason_hide || is_offseason && deactivate_all_offseason) $("#MFLBoxWrapper").parent(".mobile-wrap").remove(), $("#MFLBoxWrapper").remove(), console.log("Offseason - Mini Boxscores Script");
else
{
    if(console.log("MINISCOREBOARD SCRIPT LAST UPDATED 01-11-22"), void 0 === mflBoxHomePageOnly) var mflBoxHomePageOnly = !0;
    if(void 0 === mflBoxUseIcon) var mflBoxUseIcon = !1;
    if(void 0 === mflBoxUseLogo) var mflBoxUseLogo = !1;
    if(void 0 === mflBoxUseAbbrev) var mflBoxUseAbbrev = !1;
    if(void 0 === mflBoxIconBase) var mflBoxIconBase = "";
    if(void 0 === mflBoxIconExt) var mflBoxIconExt = "";
    if(void 0 === mflBoxNFLLogoPath) var mflBoxNFLLogoPath = "https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/";
    if(void 0 === mflBoxNFLLogoExt) var mflBoxNFLLogoExt = "svg";
    if(void 0 === mflBoxPositionSort) var mflBoxPositionSort = new Array("Coach", "Off", "QB", "TMQB", "RB", "TMRB", "WR", "TMWR", "TE", "TMTE", "PK", "TMPK", "PN", "TMPN", "DT", "DE", "TMDL", "LB", "TMLB", "CB", "S", "TMDB", "Def", "ST");
    if(void 0 === mflBoxIncludeTiebreaker) var mflBoxIncludeTiebreaker = !1;
    if(void 0 === mflBoxShowNonStarter) var mflBoxShowNonStarter = !1;
    if(void 0 === mflBoxShowMFLByeTeams) var mflBoxShowMFLByeTeams = !0;
    if(void 0 === mflBoxHideNFLMatchups) var mflBoxHideNFLMatchups = !1;
    if(void 0 === mflBoxHideFantasyMatchups) var mflBoxHideFantasyMatchups = !1;
    if(void 0 === mflBoxHidePaceScores) var mflBoxHidePaceScores = !1;
    if(void 0 === precision) var precision = 0;
    if(void 0 === mflBoxIsTotalPts) var mflBoxIsTotalPts = !1;
    var mflBoxJSON_league, doMFLBox = !1;
    mflBoxHomePageOnly ? (window.location.href.indexOf("/home/") > -1 && (doMFLBox = !0), window.location.href.toUpperCase().indexOf("MODULE=") > -1 && (doMFLBox = !1)) : doMFLBox = !0, doMFLBox ? (document.getElementById("MFLBoxWrapper") || document.write('<div id="MFLBoxWrapper"></div>'), jQuery("#MFLBoxWrapper").html('<div id="MFLBoxContainer"></div><div id="MFLBoxPlayerDetails" style="display:none"></div><div id="MFLBoxOverlay" onclick="mflBoxPlayerDetailsClose()" style="display:none"></div>'), jQuery("head").append('<style>#MFLBoxContainer .MFLGameLinks .matchupLolite{border-right:0.375rem solid transparent}#MFLBoxContainer .MFLGameLinks .matchupLolite:last-child{border-right:0}#MFLBoxWrapper .MFLBoxPlayerDetailsTR[onclick*="BYE"]:hover,#MFLBoxWrapper .MFLBoxPlayerDetailsTR[onclick*="AVG"]:hover{background:none!important;cursor:default!important}#MFLBoxWrapper{margin:0.625rem auto}#MFLBoxContainer .MFLGameLinks{width:auto;margin:0 auto;}#MFLBoxContainer .MFLGameLinks tr{height:1.688rem}#MFLBoxContainer .MFLGameLinks .MFLLiveTeam,#MFLBoxContainer .MFLGameLinks .MFLNFLLiveTeam{width:100%}#MFLBoxContainer .MFLGameLinks .MFLPaceScore{font-size:80%;font-style:italic;padding:0 0.313rem;padding:0 .313rem}#MFLBoxContainer .MFLGameLinks .nflicon{height:1.5rem;height:1.5rem;width:auto}#MFLBoxContainer .MFLGameLinks .MFLLiveScore,#MFLBoxContainer .MFLGameLinks .MFLNFLLiveScore{font-weight:700}#MFLBoxContainer .MFLBoxNav .MFLGameLinks td{font-size:0.625rem;text-transform:uppercase;text-align:center}#MFLBoxContainer .MFLGameTable{white-space:nowrap;border:0;padding:0 0.125rem;border-radius:0.188rem;min-width:auto;border-spacing:0;min-width:8.125rem}#MFLBoxMatchups td.matchupLolite:nth-child(1) .MFLGameTable{border-left:0}#MFLBoxContainer .matchupLolite,#MFLBoxContainer .matchupHilite{cursor:default;margin-bottom:0.188rem}#MFLBoxContainer .MFLLiveTeam img{max-height:0.938rem}#MFLBoxContainer .MFLLiveClock,#MFLBoxContainer .MFLNFLLiveClock{text-align:center}#MFLBoxContainer .MFLLiveScore,#MFLBoxContainer .MFLNFLLiveScore{text-align:right}#MFLBoxContainer .MFLExtrasPMR,#MFLBoxContainer .MFLExtrasCP,#MFLBoxContainer .MFLExtrasYTP{text-align:center;font-size:smaller;display:none}#MFLBoxContainer .MFLBoxDetailsArrow{position:absolute;bottom:0.375rem;right:0.125rem;cursor:pointer}.MFLBoxArrowRight:before{content:"\\f054";font-family:"Font Awesome 6 Pro";position:absolute;right:0.125rem;top:2.875rem;font-size:1.875rem;cursor:pointer}.MFLBoxArrowLeft:before{content:"\\f053";font-family:"Font Awesome 6 Pro";position:absolute;right:0.313rem;top:0.375rem;font-size:1.875rem;cursor:pointer}.MFLBoxArrowLeft.MFLBoxArrowFaded:before,.MFLBoxArrowRight.MFLBoxArrowFaded:before{cursor:default;opacity:.4}.mflBoxButtonFaded{opacity:.5}#MFLBoxOverlay{display:none;height:100%;left:0;opacity:.7;position:fixed;top:0;width:100%;z-index:99999;background-color:#000}#MFLBoxWrapper .MFLBoxPlayerDetailsClose{position:absolute;z-index:1;cursor:pointer;text-align:center;font-weight:700;padding:0;right:0.75rem;top:0.938rem;height:1.375rem;width:1.375rem;line-height:1.4;border-radius:0.188rem;border-radius:.188rem;font-family:"Open Sans",sans-serif;font-size:0.813rem;font-size:.813rem;opacity:.6}#MFLBoxWrapper .MFLBoxPlayerDetailsClose:hover{opacity:1}#MFLBoxWrapper .MFLBoxPlayerDetailsNone{text-align:center;font-style:italic}#MFLBoxWrapper #MFLBoxPlayerDetails{position:fixed;z-index:100000;overflow-y:auto;-webkit-overflow-scrolling:touch;border-radius:0.188rem;padding:0.625rem;width:90%;max-width:28.125rem;height:80%;max-height:25rem;overflow-y: auto;left: 0!important;right: 0!important;top: 0!important;bottom: 0!important;margin: auto;}#MFLBoxWrapper .MFLBoxPlayerDetailsTR:hover{cursor:pointer}#MFLBoxWrapper #MFLBoxPlayerDetails td{font-size:small;}#MFLBoxWrapper #MFLBoxPlayerDetails .MFLPaceScore{font-style:italic}#MFLBoxWrapper #MFLBoxPlayerDetailsTable{padding:0.25rem}#MFLBoxWrapper .MFLBoxLiveStatsScore{cursor:pointer}#MFLBoxWrapper .MFLBoxLiveStatsWrapper{position:relative}#MFLBoxWrapper .MFLBoxLiveStatsContent{position:absolute;right:1.875rem;top:-3.25rem;cursor:default;padding:0.625rem 0.875rem 0.625rem 0.5rem;border-radius:0.313rem;font-weight:700;width:12.5rem;text-align:center;white-space:pre-wrap}#MFLBoxWrapper .MFLBoxLiveStatsClose{position:absolute;right:0.188rem;top:0.188rem;cursor:pointer;font-weight:700}#MFLBoxWrapper #MFLBoxContainer{position:relative;margin:0.625rem 0;margin-top:0}#MFLBoxWrapper #MFLBoxMatchups{min-height:5.313rem;border:0.188rem solid transparent;overflow-y:hidden}#MFLBoxWrapper #MFLBoxMatchups div.warning{line-height:5.188rem;margin:0!important;padding:0!important;border-radius:0.188rem;display:table;width:100%}#MFLBoxWrapper #MFLBoxContainer input[type="button"]{padding:0.188rem;margin:0;font-weight:400;font-size:0.875rem;opacity:1}#MFLBoxWrapper #MFLBoxContainer .matchupAllPlay{cursor:pointer}#MFLBoxWrapper .MFLNFLBoxContainer{overflow:auto;width:auto!important;margin-left:2.188rem;margin-right:1.875rem;-webkit-overflow-scrolling:touch}#MFLBoxWrapper .MFLBoxMFLNFL{position:absolute;top:0.125rem;width:auto;margin-left:-1.563rem;width:2.813rem}.MFLLiveTeam{min-width:3.75rem}#MFLBoxWrapper .downDistance{font-size:0.563rem;font-style:italic}#MFLBoxWrapper .possession:before{background-image:url(https://www.mflscripts.com/ImageDirectory/script-images/football.svg)}#MFLBoxWrapper .redzone:before{background-image:url(https://www.mflscripts.com/ImageDirectory/script-images/goal-post.svg)}#MFLBoxWrapper .possession,#MFLBoxWrapper .redzone{position:relative;padding-left:0.875rem}#MFLBoxWrapper .possession:before,#MFLBoxWrapper .redzone:before{content: "";background-size:0.75rem 0.75rem;height:0.75rem;width:0.75rem;position:absolute;top:50%;transform:translateY(-50%);left:0}#MFLBoxWrapper .redzone{background-image:none;padding-right:0}@media only screen and (max-width: 38em){#MFLBoxWrapper #MFLBoxPlayerDetails td,#MFLBoxWrapper #MFLBoxPlayerDetails th{font-size:0.688rem}}@media only screen and (max-width: 22em){#MFLBoxWrapper #MFLBoxPlayerDetails td,#MFLBoxWrapper #MFLBoxPlayerDetails th{font-size:0.563rem}}</style>'), jQuery("#MFLBoxContainer").append('<div class="MFLBoxNav MFLBoxArrowLeft MFLBoxArrowFaded" onclick="mflBoxNewWeek(-1)" style="left:0;"></div>'), jQuery("#MFLBoxContainer").append('<div class="MFLBoxNav MFLBoxMFLNFL" style="left:1.125rem;"><table class="MFLGameLinks"><tbody><tr><td id="MFLBoxMFLCell" class="mflBoxCell"><span class="form_buttons"><input id="mflBoxButtonMFL" class="mflBoxButton" onclick="mflBoxMFLSchedule=true;jQuery(\'#mflBoxButtonMFL\').attr(\'style\',\'cursor:default\');jQuery(\'#mflBoxButtonNFL\').attr(\'style\',\'cursor:pointer\');jQuery(\'#mflBoxButtonMFL\').removeClass(\'mflBoxButtonFaded\');jQuery(\'#mflBoxButtonNFL\').addClass(\'mflBoxButtonFaded\');mflBoxNewWeek(0);" style="cursor:default" type="button" value="MFL"></span></td></tr><tr><td id="MFLBoxWeekCell"></td></tr><tr><td id="MFLBoxNFLCell" class="mflBoxCell mflBoxCellInactive"><span class="form_buttons"><input id="mflBoxButtonNFL" class="mflBoxButton mflBoxButtonFaded" onclick="mflBoxMFLSchedule=false;jQuery(\'#mflBoxButtonNFL\').attr(\'style\',\'cursor:default\');jQuery(\'#mflBoxButtonMFL\').attr(\'style\',\'cursor:pointer\');jQuery(\'#mflBoxButtonMFL\').addClass(\'mflBoxButtonFaded\');jQuery(\'#mflBoxButtonNFL\').removeClass(\'mflBoxButtonFaded\');mflBoxNewWeek(0);" type="button" value="NFL"></span></td></tr></tbody></table></div>'), jQuery("#MFLBoxContainer").append('<div id="MFLBoxMatchups" class="report MFLNFLBoxContainer"><div class="warning" style="padding:0.938rem;font-weight:bold;vertical-align:middle;text-align:center;font-style:italic;font-size:1.125rem">Retrieving Scoreboard . . . </div></div>'), jQuery("#MFLBoxContainer").append('<div class="MFLBoxNav MFLBoxArrowRight" onclick="mflBoxNewWeek(1)"></div>')) : jQuery("#MFLBoxWrapper").remove(), jQuery(".mobile-wrap #MFLBoxWrapper").unwrap();
    var mflBoxJSON_matchups, mflBoxJSON_nflSchedule, mflBoxStartWeek, mflBoxLastRegularSeasonWeek, mflBoxEndWeek, mflBoxTimer, mflBoxActiveWeek, mflBox_byeWeek = new Array,
        mflBoxJSON_projectedScores = new Array,
        mflBoxJSON_projectedScoresWeek = new Array,
        mflBox_league = new Array,
        mflBox_matchups = new Array,
        mflBox_nflSchedule = new Array,
        mflBox_nflOpponents = new Array,
        mflBox_players = new Array,
        mflBoxMFLSchedule = !0,
        mflBoxStarters = leagueAttributes.MaxStarters,
        mflBoxCurrentWeekKickoff = 0,
        mflBoxActiveWeekKickoff = 0,
        mflBoxCurrentWeek = completedWeek,
        mflBoxCurrentLiveScoring = !1,
        mflBoxHasNextFantasyWeek = !1,
        mflBoxHasNextNFLWeek = !1,
        mflBoxIsAllPlay = !1,
        mflBoxAllPlayId = "0001",
        mflBoxDetailsTracker = new Array,
        mflBoxFirstKickoff = new Array,
        mflBoxNFLKickoff = new Array,
        mflBoxFranchise = new Array,
        mflBoxPlayerDetailsFid = {
            fid: "",
            boxid: 0
        },
        mflBoxPlayerProjected = new Array,
        mflBoxLiveStatsPlayer = [],
        mflBoxLiveStatsTeam = [],
        mflBoxTiebreaker = new Array;
    "undefined" != typeof franchise_id && "0000" !== franchise_id && (mflBoxAllPlayId = franchise_id);
    var mflBoxWeekDay = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"),
        mflBoxMonth = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"),
        mflBoxUpdateSeconds = 45,
        mflBoxNflGameStatus = new Array,
        ls_last_update_secs = 0;

    function doMFLBoxFantasyWeek()
    {
        if(mflBoxJSON_matchups = [], mflBoxActiveWeek === mflBoxCurrentWeek)
        {
            if(mflBoxCurrentLiveScoring) return dbDebug && (dbDebugDetail ? console.log("Api Call: liveScoring App:Mini-Scoreboard Week:" + mflBoxActiveWeek) : console.log("Api Call")), fetch(`${baseURLDynamic}/${year}/export?TYPE=liveScoring&L=${league_id}&W=${mflBoxActiveWeek}&DETAILS=1&JSON=1`).then((function(e)
            {
                if(e.ok) return e.json();
                throw new Error("Network response was not ok.")
            })).then((function(e)
            {
                if(e.liveScoring.hasOwnProperty("matchup") && (e.liveScoring.matchup.hasOwnProperty("franchise") ? (mflBoxJSON_matchups.matchup = new Array, mflBoxJSON_matchups.matchup.push(e.liveScoring.matchup)) : mflBoxJSON_matchups.matchup = e.liveScoring.matchup), e.liveScoring.hasOwnProperty("franchise") && (e.liveScoring.hasOwnProperty("id") ? (mflBoxJSON_matchups.franchise = new Array, mflBoxJSON_matchups.franchise.push(e.liveScoring.franchise)) : mflBoxJSON_matchups.franchise = e.liveScoring.franchise), mflBoxIncludeTiebreaker)
                {
                    var a = mflBoxActiveWeek;
                    a > endWeek && (a = endWeek);
                    var o = reportWeeklyResults_ar["w_" + a];
                    try
                    {
                        mflBoxPopulateTiebreaker(o.weeklyResults)
                    }
                    catch
                    {}
                }
            })).catch((function(e)
            {
                console.log("Error:", e)
            }));
            (o = mflBoxActiveWeek) > endWeek && (o = endWeek);
            var e = "w_" + o,
                a = reportWeeklyResults_ar[e];
            try
            {
                mflBoxJSON_matchups = a.weeklyResults
            }
            catch
            {}
        }
        else
        {
            var o;
            (o = mflBoxActiveWeek) > endWeek && (o = endWeek);
            e = "w_" + o, a = reportWeeklyResults_ar[e];
            try
            {
                mflBoxJSON_matchups = a.weeklyResults
            }
            catch
            {}
        }
    }

    function mflBoxCheckWeeklyResultsForScore(e)
    {
        var a = mflBoxActiveWeek;
        a > endWeek && (a = endWeek);
        var o = reportWeeklyResults_ar["w_" + a],
            t = new Array;
        try
        {
            o.weeklyResults.hasOwnProperty("matchup") && (o.weeklyResults.matchup.hasOwnProperty("franchise") ? t[0] = o.weeklyResults.matchup : t = o.weeklyResults.matchup)
        }
        catch
        {}
    }
    async function doMFLBoxNFLWeek()
    {
        if(reportDbSupported && !dbDisabled)
        {
            if(reportDb_ar.nflSchedule.timestamp === cacheDaily && reportDb_ar.nflSchedule.ar.hasOwnProperty("w_" + mflBoxActiveWeek)) return doMFLBoxNFLWeek_response(mflBoxJSON_nflSchedule = JSON.parse(reportDb_ar.nflSchedule.ar["w_" + mflBoxActiveWeek]).nflSchedule), !0
        }
        else if(!1 !== cacheResponse("cache_nflSchedule-" + mflBoxActiveWeek + "_" + year + "_" + cacheDaily)) return doMFLBoxNFLWeek_response(mflBoxJSON_nflSchedule = JSON.parse(cacheResponse("cache_nflSchedule-" + mflBoxActiveWeek + "_" + year + "_" + cacheDaily)).nflSchedule), !0;
        dbDebug && (dbDebugDetail ? console.log("Api Call: nflSchedule App:Mini-Boxscore Week:" + mflBoxActiveWeek) : console.log("Api Call"));
        try
        {
            await reportNflScheduleAPI(mflBoxActiveWeek), doMFLBoxNFLWeek_response(mflBoxJSON_nflSchedule = reportNflSchedule_ar["w_" + mflBoxActiveWeek].nflSchedule)
        }
        catch (e)
        {
            console.log("Error: doMFLBoxNFLWeek")
        }
    }

    function doMFLBoxNFLWeek_response(e)
    {
        mflBoxNflGameStatus = [];
        var a = new Array;
        e.matchup.hasOwnProperty("team") ? a[0] = e.matchup : a = e.matchup;
        for(var o = 0; o < a.length; o++)
        {
            var t = a[o].team[0].id,
                r = a[o].team[1].id,
                l = parseInt(a[o].kickoff);
            mflBoxNflGameStatus[t] = {
                time: l,
                isHome: !1,
                isBye: !1
            }, mflBoxNflGameStatus[r] = {
                time: l,
                isHome: !0,
                isBye: !1
            }
        }
    }
    async function doMFLBoxProjectedScores()
    {
        if(mflBoxJSON_projectedScoresWeek.hasOwnProperty(`w_${mflBoxActiveWeek}`)) mflBoxJSON_projectedScores = mflBoxJSON_projectedScoresWeek[`w_${mflBoxActiveWeek}`];
        else
        {
            dbDebug && (dbDebugDetail ? console.log(`Api Call: projectedScores App:Mini-Boxscore Week:${mflBoxActiveWeek}`) : console.log("Api Call"));
            try
            {
                await reportProjectedScoresAPI(mflBoxActiveWeek);
                var e = "w_" + mflBoxActiveWeek;
                mflBoxJSON_projectedScoresWeek[`w_${mflBoxActiveWeek}`] = reportProjectedScores_ar[e], mflBoxJSON_projectedScores = reportProjectedScores_ar[e]
            }
            catch (e)
            {
                console.error("Error:", e)
            }
        }
    }

    function doMFLBoxArrays()
    {
        for(var e in mflBox_players = new Array, mflBox_player_fid_tracker = new Array, mflBox_matchups = new Array, mflBox_nflSchedule = new Array, mflBox_nflOpponents = new Array, mflBoxIsAllPlay = !1, mflBoxFranchise = new Array, mflBoxPlayerProjected = new Array, reportStandingsFid_ar)
            if(reportStandingsFid_ar.hasOwnProperty(e))
            {
                var a = "0",
                    o = "0",
                    t = "0";
                reportStandingsFid_ar[e].hasOwnProperty("w") && (a = reportStandingsFid_ar[e].w), 
                reportStandingsFid_ar[e].hasOwnProperty("l") && (o = reportStandingsFid_ar[e].l), 
                reportStandingsFid_ar[e].hasOwnProperty("t") && (t = reportStandingsFid_ar[e].t), 
                franchiseDatabase["fid_" + e].record = t === "0" || t === 0
    ? `(${a}-${o})`
    : `(${a}-${o}-${t})`;

            } if(mflBoxJSON_matchups.hasOwnProperty("matchup"))
        {
            var r = new Array;
            mflBoxJSON_matchups.matchup.hasOwnProperty("franchise") ? r.push(mflBoxJSON_matchups.matchup) : r = mflBoxJSON_matchups.matchup;
            for(var l = 0; l < r.length; l++)
            {
                var s = r[l].franchise[0],
                    i = r[l].franchise[1];
                mflBox_matchups[l] = {
                    roadId: s.id,
                    homeId: i.id,
                    roadScore: s.score,
                    homeScore: i.score,
                    roadProjected: 0,
                    homeProjected: 0,
                    roadYetToPlay: 0,
                    homeYetToPlay: 0,
                    roadCurrentlyPlaying: 0,
                    homeCurrentlyPlaying: 0,
                    roadPlayerMinutesRemaining: 0,
                    homePlayerMinutesRemaining: 0
                }, mflBox_matchups[l].roadSpread = "", mflBox_matchups[l].homeSpread = "", void 0 !== s.spread && parseFloat(s.spread) < 0 && (mflBox_matchups[l].roadSpread = parseFloat(s.spread).toFixed(1)), void 0 !== i.spread && parseFloat(i.spread) < 0 && (mflBox_matchups[l].homeSpread = parseFloat(i.spread).toFixed(1)), mflBoxActiveWeek > liveScoringWeek && mflBoxActiveWeek > completedWeek + 1 && (mflBox_matchups[l].roadSpread = "", mflBox_matchups[l].homeSpread = ""), mflBox_matchups[l].roadResult = "", mflBox_matchups[l].homeResult = "", void 0 !== s.result && (mflBox_matchups[l].roadResult = s.result), void 0 !== i.result && (mflBox_matchups[l].homeResult = i.result), mflBox_matchups[l].roadStarters = "", mflBox_matchups[l].homeStarters = "", s.hasOwnProperty("starters") && void 0 !== s.starters && (mflBox_matchups[l].roadStarters = s.starters), i.hasOwnProperty("starters") && void 0 !== i.starters && (mflBox_matchups[l].homeStarters = i.starters);
                try
                {
                    if(mflBox_matchups[l].roadYetToPlay = parseInt(r[l].franchise[0].playersYetToPlay), mflBox_matchups[l].homeYetToPlay = parseInt(r[l].franchise[1].playersYetToPlay), mflBox_matchups[l].roadCurrentlyPlaying = parseInt(r[l].franchise[0].playersCurrentlyPlaying), mflBox_matchups[l].homeCurrentlyPlaying = parseInt(r[l].franchise[1].playersCurrentlyPlaying), mflBox_matchups[l].roadPlayerMinutesRemaining = parseInt(parseInt(r[l].franchise[0].gameSecondsRemaining) / 60 + .99), mflBox_matchups[l].homePlayerMinutesRemaining = parseInt(parseInt(r[l].franchise[1].gameSecondsRemaining) / 60 + .99), r[l].franchise[0].players.hasOwnProperty("player"))
                        for(var m = 0; m < r[l].franchise[0].players.player.length; m++)
                        {
                            if("starter" === (c = r[l].franchise[0].players.player[m]).status) var f = "1";
                            else f = "0";
                            if(void 0 === mflBox_players["pid_" + c.id] ? (mflBox_players["pid_" + c.id] = {
                                    id: c.id,
                                    fid: s.id,
                                    score: c.score,
                                    gameSecondsRemaining: parseInt(c.gameSecondsRemaining),
                                    isStarter: f
                                }, mflBox_player_fid_tracker[c.id + "_" + s.id] = 1) : void 0 === mflBox_player_fid_tracker[c.id + "_" + s.id] && (mflBox_players["pid_" + c.id].fid += "," + s.id, mflBox_players["pid_" + c.id].isStarter += "," + f, mflBox_player_fid_tracker[c.id + "_" + s.id] = 1), "1" === f) try
                            {
                                void 0 === mflBoxFirstKickoff[r[l].franchise[0].id] ? mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] > 0 && (mflBoxFirstKickoff[r[l].franchise[0].id] = mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team]) : mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] > 0 && mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] < mflBoxFirstKickoff[r[l].franchise[0].id] && (mflBoxFirstKickoff[r[l].franchise[0].id] = mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team])
                            }
                            catch (e)
                            {
                                console.log("error road")
                            }
                            void 0 === mflBoxFranchise["fid_" + s.id] && (mflBoxFranchise["fid_" + s.id] = {
                                starter: new Array,
                                bench: new Array,
                                tiebreaker: new Array
                            }), "starter" === c.status && (mflBoxFranchise["fid_" + s.id].starter[c.id] = {
                                score: c.score,
                                gsr: c.gameSecondsRemaining
                            }), "nonstarter" === c.status && (mflBoxFranchise["fid_" + s.id].bench[c.id] = {
                                score: c.score,
                                gsr: c.gameSecondsRemaining
                            })
                        }
                    if(r[l].franchise[1].players.hasOwnProperty("player"))
                        for(m = 0; m < r[l].franchise[1].players.player.length; m++)
                        {
                            if("starter" === (c = r[l].franchise[1].players.player[m]).status) f = "1";
                            else f = "0";
                            if(void 0 === mflBox_players["pid_" + c.id] ? (mflBox_players["pid_" + c.id] = {
                                    id: c.id,
                                    fid: i.id,
                                    score: c.score,
                                    gameSecondsRemaining: parseInt(c.gameSecondsRemaining),
                                    isStarter: f
                                }, mflBox_player_fid_tracker[c.id + "_" + i.id] = 1) : void 0 === mflBox_player_fid_tracker[c.id + "_" + i.id] && (mflBox_players["pid_" + c.id].fid += "," + i.id, mflBox_players["pid_" + c.id].isStarter += "," + f, mflBox_player_fid_tracker[c.id + "_" + i.id] = 1), "1" === f) try
                            {
                                void 0 === mflBoxFirstKickoff[r[l].franchise[1].id] ? mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] > 0 && (mflBoxFirstKickoff[r[l].franchise[1].id] = mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team]) : mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] > 0 && mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] < mflBoxFirstKickoff[r[l].franchise[1].id] && (mflBoxFirstKickoff[r[l].franchise[1].id] = mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team])
                            }
                            catch (e)
                            {
                                console.log("error home")
                            }
                            void 0 === mflBoxFranchise["fid_" + i.id] && (mflBoxFranchise["fid_" + i.id] = {
                                starter: new Array,
                                bench: new Array,
                                tiebreaker: new Array
                            }), "starter" === c.status && (mflBoxFranchise["fid_" + i.id].starter[c.id] = {
                                score: c.score,
                                gsr: c.gameSecondsRemaining
                            }), "nonstarter" === c.status && (mflBoxFranchise["fid_" + i.id].bench[c.id] = {
                                score: c.score,
                                gsr: c.gameSecondsRemaining
                            })
                        }
                }
                catch (e)
                {
                    try
                    {
                        if(mflBoxActiveWeek <= completedWeek)
                        {
                            s = r[l].franchise[0], i = r[l].franchise[1];
                            try
                            {
                                for(var n = 0; n < r[l].franchise[0].player.length; n++)
                                {
                                    var c = r[l].franchise[0].player[n];
                                    void 0 === mflBoxFranchise["fid_" + s.id] && (mflBoxFranchise["fid_" + s.id] = {
                                        starter: new Array,
                                        bench: new Array,
                                        tiebreaker: new Array
                                    }), "starter" === c.status && (mflBoxFranchise["fid_" + s.id].starter[c.id] = {
                                        score: c.score,
                                        gsr: 0
                                    }), "nonstarter" === c.status && (mflBoxFranchise["fid_" + s.id].bench[c.id] = {
                                        score: c.score,
                                        gsr: 0
                                    })
                                }
                            }
                            catch (e)
                            {}
                            try
                            {
                                for(n = 0; n < r[l].franchise[1].player.length; n++)
                                {
                                    c = r[l].franchise[1].player[n];
                                    void 0 === mflBoxFranchise["fid_" + i.id] && (mflBoxFranchise["fid_" + i.id] = {
                                        starter: new Array,
                                        bench: new Array,
                                        tiebreaker: new Array
                                    }), "starter" === c.status && (mflBoxFranchise["fid_" + i.id].starter[c.id] = {
                                        score: c.score,
                                        gsr: 0
                                    }), "nonstarter" === c.status && (mflBoxFranchise["fid_" + i.id].bench[c.id] = {
                                        score: c.score,
                                        gsr: 0
                                    })
                                }
                            }
                            catch (e)
                            {}
                        }
                    }
                    catch (e)
                    {}
                }
            }
        }
        else
        {
            mflBoxIsAllPlay = !0;
            for(l = 0; l < mflBoxJSON_matchups.franchise.length; l++)
                if(mflBoxAllPlayId === mflBoxJSON_matchups.franchise[l].id) i = mflBoxJSON_matchups.franchise[l];
            var d = 0;
            for(l = 0; l < mflBoxJSON_matchups.franchise.length; l++)
            {
                if(mflBoxAllPlayId !== mflBoxJSON_matchups.franchise[l].id)
                {
                    s = mflBoxJSON_matchups.franchise[l];
                    mflBox_matchups[d] = {
                        roadId: s.id,
                        homeId: i.id,
                        roadScore: s.score,
                        homeScore: i.score,
                        roadProjected: 0,
                        homeProjected: 0,
                        roadYetToPlay: 0,
                        homeYetToPlay: 0,
                        roadCurrentlyPlaying: 0,
                        homeCurrentlyPlaying: 0,
                        roadPlayerMinutesRemaining: 0,
                        homePlayerMinutesRemaining: 0
                    }, mflBox_matchups[d].roadSpread = "", mflBox_matchups[d].homeSpread = "", mflBox_matchups[d].roadResult = "", mflBox_matchups[d].homeResult = "", mflBoxActiveWeek <= completedWeek && (parseFloat(s.score) > parseFloat(i.score) && (mflBox_matchups[d].roadResult = "W"), parseFloat(i.score) > parseFloat(s.score) && (mflBox_matchups[d].homeResult = "W")), mflBox_matchups[d].roadYetToPlay = parseInt(s.playersYetToPlay), mflBox_matchups[d].homeYetToPlay = parseInt(i.playersYetToPlay), mflBox_matchups[d].roadCurrentlyPlaying = parseInt(s.playersCurrentlyPlaying), mflBox_matchups[d].homeCurrentlyPlaying = parseInt(i.playersCurrentlyPlaying), mflBox_matchups[d].roadPlayerMinutesRemaining = parseInt(parseInt(s.gameSecondsRemaining) / 60 + .99), mflBox_matchups[d].homePlayerMinutesRemaining = parseInt(parseInt(i.gameSecondsRemaining) / 60 + .99), d++
                }
                try
                {
                    for(m = 0; m < mflBoxJSON_matchups.franchise[l].players.player.length; m++)
                    {
                        s = mflBoxJSON_matchups.franchise[l];
                        if("starter" === (c = mflBoxJSON_matchups.franchise[l].players.player[m]).status) f = "1";
                        else f = "0";
                        if(void 0 === mflBox_players["pid_" + c.id] ? (mflBox_players["pid_" + c.id] = {
                                id: c.id,
                                fid: s.id,
                                score: c.score,
                                gameSecondsRemaining: parseInt(c.gameSecondsRemaining),
                                isStarter: f
                            }, mflBox_player_fid_tracker[c.id + "_" + s.id] = 1) : void 0 === mflBox_player_fid_tracker[c.id + "_" + s.id] && (mflBox_players["pid_" + c.id].fid += "," + s.id, mflBox_players["pid_" + c.id].isStarter += "," + f, mflBox_player_fid_tracker[c.id + "_" + s.id] = 1), "1" === f) try
                        {
                            void 0 === mflBoxFirstKickoff[mflBoxJSON_matchups.franchise[l].id] ? mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] > 0 && (mflBoxFirstKickoff[mflBoxJSON_matchups.franchise[l].id] = mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team]) : mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] > 0 && mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] < mflBoxFirstKickoff[mflBoxJSON_matchups.franchise[l].id] && (mflBoxFirstKickoff[mflBoxJSON_matchups.franchise[l].id] = mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team])
                        }
                        catch (e)
                        {}
                        void 0 === mflBoxFranchise["fid_" + s.id] && (mflBoxFranchise["fid_" + s.id] = {
                            starter: new Array,
                            bench: new Array,
                            tiebreaker: new Array
                        }), "starter" === c.status && (mflBoxFranchise["fid_" + s.id].starter[c.id] = {
                            score: c.score,
                            gsr: c.gameSecondsRemaining
                        }), "nonstarter" === c.status && (mflBoxFranchise["fid_" + s.id].bench[c.id] = {
                            score: c.score,
                            gsr: c.gameSecondsRemaining
                        })
                    }
                }
                catch (e)
                {
                    try
                    {
                        if(mflBoxActiveWeek <= completedWeek)
                            for(s = mflBoxJSON_matchups.franchise[l], n = 0; n < mflBoxJSON_matchups.franchise[l].player.length; n++)
                            {
                                c = mflBoxJSON_matchups.franchise[l].player[n];
                                void 0 === mflBoxFranchise["fid_" + s.id] && (mflBoxFranchise["fid_" + s.id] = {
                                    starter: new Array,
                                    bench: new Array,
                                    tiebreaker: new Array
                                }), "starter" === c.status && (mflBoxFranchise["fid_" + s.id].starter[c.id] = {
                                    score: c.score,
                                    gsr: 0
                                }), "nonstarter" === c.status && (mflBoxFranchise["fid_" + s.id].bench[c.id] = {
                                    score: c.score,
                                    gsr: 0
                                })
                            }
                    }
                    catch (e)
                    {}
                }
            }
            mflBox_matchups.sort((function(e, a)
            {
                return parseFloat(e.roadScore) < parseFloat(a.roadScore) ? 1 : parseFloat(e.roadScore) > parseFloat(a.roadScore) ? -1 : 0
            }))
        }
        if(!mflBoxIsAllPlay && mflBoxShowMFLByeTeams && mflBoxJSON_matchups.hasOwnProperty("franchise"))
        {
            if(mflBoxJSON_matchups.franchise.hasOwnProperty("id"))(x = new Array).franchise = new Array, x.franchise.push(mflBoxJSON_matchups.franchise);
            else var x = mflBoxJSON_matchups;
            for(l = 0; l < x.franchise.length; l++)
            {
                d = mflBox_matchups.length, s = x.franchise[l];
                mflBox_matchups[d] = {
                    roadId: s.id,
                    homeId: "BYE",
                    roadScore: s.score,
                    homeScore: 0,
                    roadProjected: 0,
                    homeProjected: 0,
                    roadYetToPlay: 0,
                    homeYetToPlay: 0,
                    roadCurrentlyPlaying: 0,
                    homeCurrentlyPlaying: 0,
                    roadPlayerMinutesRemaining: 0,
                    homePlayerMinutesRemaining: 0
                }, mflBox_matchups[d].roadSpread = "", mflBox_matchups[d].homeSpread = "", mflBox_matchups[d].roadResult = "", mflBox_matchups[d].homeResult = "", mflBox_matchups[d].roadYetToPlay = parseInt(s.playersYetToPlay), mflBox_matchups[d].homeYetToPlay = 0, mflBox_matchups[d].roadCurrentlyPlaying = parseInt(s.playersCurrentlyPlaying), mflBox_matchups[d].homeCurrentlyPlaying = 0, mflBox_matchups[d].roadPlayerMinutesRemaining = parseInt(parseInt(s.gameSecondsRemaining) / 60 + .99), mflBox_matchups[d].homePlayerMinutesRemaining = 0, d++;
                try
                {
                    for(m = 0; m < x.franchise[l].players.player.length; m++)
                    {
                        if("starter" === (c = x.franchise[l].players.player[m]).status) f = "1";
                        else f = "0";
                        if(void 0 === mflBox_players["pid_" + c.id] ? (mflBox_players["pid_" + c.id] = {
                                id: c.id,
                                fid: s.id,
                                score: c.score,
                                gameSecondsRemaining: parseInt(c.gameSecondsRemaining),
                                isStarter: f
                            }, mflBox_player_fid_tracker[c.id + "_" + s.id] = 1) : void 0 === mflBox_player_fid_tracker[c.id + "_" + s.id] && (mflBox_players["pid_" + c.id].fid += "," + s.id, mflBox_players["pid_" + c.id].isStarter += "," + f, mflBox_player_fid_tracker[c.id + "_" + s.id] = 1), "1" === f) try
                        {
                            void 0 === mflBoxFirstKickoff[x.franchise[l].id] ? mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] > 0 && (mflBoxFirstKickoff[x.franchise[l].id] = mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team]) : mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] > 0 && mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team] < mflBoxFirstKickoff[x.franchise[l].id] && (mflBoxFirstKickoff[x.franchise[l].id] = mflBoxNFLKickoff[playerDatabase["pid_" + c.id].team])
                        }
                        catch (e)
                        {}
                        void 0 === mflBoxFranchise["fid_" + s.id] && (mflBoxFranchise["fid_" + s.id] = {
                            starter: new Array,
                            bench: new Array,
                            tiebreaker: new Array
                        }), "starter" === c.status && (mflBoxFranchise["fid_" + s.id].starter[c.id] = {
                            score: c.score,
                            gsr: c.gameSecondsRemaining
                        }), "nonstarter" === c.status && (mflBoxFranchise["fid_" + s.id].bench[c.id] = {
                            score: c.score,
                            gsr: c.gameSecondsRemaining
                        })
                    }
                }
                catch (e)
                {
                    try
                    {
                        if(mflBoxActiveWeek <= completedWeek)
                            for(s = x.franchise[l], n = 0; n < x.franchise[l].player.length; n++)
                            {
                                c = x.franchise[l].player[n];
                                void 0 === mflBoxFranchise["fid_" + s.id] && (mflBoxFranchise["fid_" + s.id] = {
                                    starter: new Array,
                                    bench: new Array,
                                    tiebreaker: new Array
                                }), "starter" === c.status && (mflBoxFranchise["fid_" + s.id].starter[c.id] = {
                                    score: c.score,
                                    gsr: 0
                                }), "nonstarter" === c.status && (mflBoxFranchise["fid_" + s.id].bench[c.id] = {
                                    score: c.score,
                                    gsr: 0
                                })
                            }
                    }
                    catch (e)
                    {}
                }
            }
        }
        var B = new Array;
        void 0 === mflBoxJSON_nflSchedule.matchup.length ? (B.matchup = new Array, B.matchup.push(mflBoxJSON_nflSchedule.matchup)) : B = mflBoxJSON_nflSchedule;
        for(m = 0; m < 3; m++)
            for(l = 0; l < B.matchup.length; l++)
            {
                s = B.matchup[l].team[0], i = B.matchup[l].team[1];
                switch(m)
                {
                    case 0:
                        if("INPROG" !== mflBoxNflGameStatus[i.id].status) continue;
                        break;
                    case 1:
                        if("SCHED" !== mflBoxNflGameStatus[i.id].status) continue;
                        break;
                    case 2:
                        if("OVER" !== mflBoxNflGameStatus[i.id].status) continue
                }
                if(parseFloat(s.spread) < 0) var p = parseFloat(s.spread).toFixed(1);
                else p = "";
                if(parseFloat(i.spread) < 0) var h = parseFloat(i.spread).toFixed(1);
                else h = "";
                mflBoxActiveWeek > liveScoringWeek && mflBoxActiveWeek > completedWeek + 1 && (h = "", p = ""), mflBox_nflSchedule.push(
                {
                    roadId: s.id,
                    homeId: i.id,
                    roadScore: mflBoxLiveStatsTeam[s.id].TPS,
                    homeScore: mflBoxLiveStatsTeam[i.id].TPS,
                    roadSpread: p,
                    homeSpread: h,
                    roadResult: mflBoxLiveStatsTeam[s.id].RES,
                    homeResult: mflBoxLiveStatsTeam[i.id].RES,
                    kickoff: mflBoxNflGameStatus[i.id].kickoff,
                    gameSecondsRemaining: mflBoxNflGameStatus[i.id].secs_left,
                    clock: mflBoxNflGameStatus[i.id].clock,
                    roadPossession: mflBoxNflGameStatus[s.id].possession,
                    roadRedzone: mflBoxNflGameStatus[s.id].redzone,
                    roadDownAndDist: mflBoxNflGameStatus[s.id].down_and_dist,
                    homePossession: mflBoxNflGameStatus[i.id].possession,
                    homeRedzone: mflBoxNflGameStatus[i.id].redzone,
                    homeDownAndDist: mflBoxNflGameStatus[i.id].down_and_dist
                }), 0 === mflBoxCurrentWeekKickoff && (mflBoxCurrentWeekKickoff = parseInt(B.matchup[l].kickoff)), 0 === l && (mflBoxActiveWeekKickoff = parseInt(B.matchup[l].kickoff)), mflBox_nflOpponents[s.id] = {
                    opponent: i.id,
                    isHome: !1,
                    score: mflBoxLiveStatsTeam[s.id].TPS,
                    result: mflBoxLiveStatsTeam[s.id].RES
                }, mflBox_nflOpponents[i.id] = {
                    opponent: s.id,
                    isHome: !0,
                    score: mflBoxLiveStatsTeam[i.id].TPS,
                    result: mflBoxLiveStatsTeam[i.id].RES
                }
            }
        return !0
    }
    async function doMFLBoxArrows()
    {
        mflBoxMFLSchedule && mflBoxActiveWeek > mflBoxEndWeek && (mflBoxActiveWeek = mflBoxEndWeek), jQuery("#MFLBoxWeekCell").html("Wk " + mflBoxActiveWeek), mflBoxMFLSchedule ? mflBoxActiveWeek > mflBoxStartWeek ? jQuery(".MFLBoxArrowLeft").removeClass("MFLBoxArrowFaded") : jQuery(".MFLBoxArrowLeft").addClass("MFLBoxArrowFaded") : mflBoxActiveWeek > 1 ? jQuery(".MFLBoxArrowLeft").removeClass("MFLBoxArrowFaded") : jQuery(".MFLBoxArrowLeft").addClass("MFLBoxArrowFaded");
        let e = !1;
        var a = !1;
        if(reportDbSupported && !dbDisabled)
        {
            if(reportDb_ar.nflSchedule.timestamp === cacheDaily && reportDb_ar.nflSchedule.ar.hasOwnProperty("w_" + (mflBoxActiveWeek + 1)))
            {
                a = !0;
                var o = JSON.parse(reportDb_ar.nflSchedule.ar["w_" + (mflBoxActiveWeek + 1)]);
                try
                {
                    o.nflSchedule.matchup.length > 0 && (e = !0)
                }
                catch (e)
                {}
                try
                {
                    o.nflSchedule.matchup.team.length > 0 && (e = !0)
                }
                catch (e)
                {}
                e ? jQuery(".MFLBoxArrowRight").removeClass("MFLBoxArrowFaded") : jQuery(".MFLBoxArrowRight").addClass("MFLBoxArrowFaded")
            }
        }
        else if(!1 !== cacheResponse("cache_nflSchedule-" + (mflBoxActiveWeek + 1) + "_" + year + "_" + cacheDaily))
        {
            a = !0;
            o = JSON.parse(cacheResponse("cache_nflSchedule-" + (mflBoxActiveWeek + 1) + "_" + year + "_" + cacheDaily));
            try
            {
                o.nflSchedule.matchup.length > 0 && (e = !0)
            }
            catch (e)
            {}
            try
            {
                o.nflSchedule.matchup.team.length > 0 && (e = !0)
            }
            catch (e)
            {}
            e ? jQuery(".MFLBoxArrowRight").removeClass("MFLBoxArrowFaded") : jQuery(".MFLBoxArrowRight").addClass("MFLBoxArrowFaded")
        }
        if(!a)
        {
            dbDebug && (dbDebugDetail ? console.log("Api Call: nflSchedule App:Mini-Boxscore Week:" + (mflBoxActiveWeek + 1)) : console.log("Api Call"));
            try
            {
                await reportNflScheduleAPI(mflBoxActiveWeek + 1);
                var t = "w_" + (mflBoxActiveWeek + 1);
                if(parseInt(reportNflSchedule_ar[t].nflSchedule.week) === mflBoxActiveWeek + 1)
                {
                    try
                    {
                        reportNflSchedule_ar[t].nflSchedule.matchup.length > 0 && (e = !0)
                    }
                    catch (e)
                    {}
                    try
                    {
                        reportNflSchedule_ar[t].nflSchedule.matchup.team.length > 0 && (e = !0)
                    }
                    catch (e)
                    {}
                }
                e ? jQuery(".MFLBoxArrowRight").removeClass("MFLBoxArrowFaded") : jQuery(".MFLBoxArrowRight").addClass("MFLBoxArrowFaded")
            }
            catch (e)
            {
                console.log("No Schedule For NFL Week Requested"), jQuery(".MFLBoxArrowRight").addClass("MFLBoxArrowFaded")
            }
        }
    }

    function mflBoxExpand(e, a)
    {
        a ? (jQuery(".MFLExtras_" + e).show(), jQuery("#mflBoxCollapse_" + e).show(), jQuery("#mflBoxExpand_" + e).hide(), mflBoxDetailsTracker[e] = a) : (jQuery(".MFLExtras_" + e).hide(), jQuery("#mflBoxCollapse_" + e).hide(), jQuery("#mflBoxExpand_" + e).show(), mflBoxDetailsTracker[e] = a)
    }

    function mflBoxProjectedScoresHistorical()
    {
        for(var e = 0; e < mflBoxJSON_projectedScores.projectedScores.playerScore.length; e++)
        {
            var a = mflBoxJSON_projectedScores.projectedScores.playerScore[e],
                o = a.id;
            mflBoxPlayerProjected[o] = parseFloat(a.score), isNaN(mflBoxPlayerProjected[o]) && (mflBoxPlayerProjected[o] = 0)
        }
    }

    function mflBoxApplyLiveSettings()
    {
        if(mflBoxMFLSchedule)
        {
            var e = new Array,
                a = new Array;
            try
            {
                for(var o = new Array, t = 0; t < mflBoxJSON_projectedScores.projectedScores.playerScore.length; t++) o["pid_" + mflBoxJSON_projectedScores.projectedScores.playerScore[t].id] = {
                    id: mflBoxJSON_projectedScores.projectedScores.playerScore[t].id,
                    score: mflBoxJSON_projectedScores.projectedScores.playerScore[t].score
                };
                for(var r in playerDatabase) playerDatabase.hasOwnProperty(r) && (o.hasOwnProperty(r) || mflBoxJSON_projectedScores.projectedScores.playerScore.push(
                {
                    id: playerDatabase[r].id,
                    score: 0
                }));
                o = null
            }
            catch (e)
            {}
            try
            {
                for(t = 0; t < mflBoxJSON_projectedScores.projectedScores.playerScore.length; t++)
                {
                    var l = mflBoxJSON_projectedScores.projectedScores.playerScore[t],
                        s = l.id;
                    mflBoxPlayerProjected[s] = parseFloat(l.score), isNaN(mflBoxPlayerProjected[s]) && (mflBoxPlayerProjected[s] = 0);
                    try
                    {
                        var i = parseFloat(mflBox_players["pid_" + s].score),
                            m = mflBox_players["pid_" + s].fid.split(","),
                            f = mflBox_players["pid_" + s].isStarter.split(",");
                        if("" === l.score) var n = 0;
                        else n = parseFloat(l.score);
                        for(var c = mflBox_players["pid_" + s].gameSecondsRemaining, d = i + c / 3600 * n, x = n, B = 0; B < m.length; B++)
                        {
                            var p = m[B],
                                h = f[B];
                            void 0 === e[p] && (e[p] = {
                                pace: 0,
                                expected_pace: 0,
                                players: 0,
                                gameSecondsRemaining: 0
                            }), "1" === h && void 0 === a[s + "_" + p] && (a[s + "_" + p] = 1, e[p].pace += d, e[p].expected_pace += x, e[p].players++, e[p].gameSecondsRemaining += c)
                        }
                    }
                    catch (e)
                    {}
                }
            }
            catch (e)
            {}
            for(var r in e)
                if(e.hasOwnProperty(r) && e[r].gameSecondsRemaining > 0)
                {
                    var u = "";
                    e[r].pace > e[r].expected_pace && (u = " MFLPaceScorePositive"), e[r].pace < e[r].expected_pace && (u = " MFLPaceScoreNegative"), jQuery('[id^="mflBoxPace_' + r + '_"]').html('<span class="warning' + u + '" title="Original projection ' + e[r].expected_pace.toFixed(precision) + '">' + e[r].pace.toFixed(precision) + "</span>")
                } for(t = 0; t < mflBox_matchups.length; t++)
            {
                if(mflBoxIsAllPlay) var y = '<span style="position:absolute;left:0.313rem;bottom:0.438rem;cursor:pointer" title="Swap All Play Team" onclick="mflBoxAllPlayId=\'' + mflBox_matchups[t].roadId + '\';mflBoxNewWeek(0)"><i class="fa-regular fa-arrow-right-arrow-left" aria-hidden="true"></i></span>';
                else y = "";
                try
                {
                    var _ = e[mflBox_matchups[t].roadId].players + e[mflBox_matchups[t].homeId].players,
                        L = e[mflBox_matchups[t].roadId].gameSecondsRemaining + e[mflBox_matchups[t].homeId].gameSecondsRemaining,
                        S = 3600 * _
                }
                catch (e)
                {
                    L = 1, S = 1
                }
                if("BYE" === mflBox_matchups[t].homeId) jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(" ");
                else if(L === S) try
                {
                    void 0 === mflBoxFirstKickoff[mflBox_matchups[t].roadId] || void 0 === mflBoxFirstKickoff[mflBox_matchups[t].homeId] ? jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(mflBoxActiveWeekKickoff, 2) + y) : mflBoxFirstKickoff[mflBox_matchups[t].roadId] < mflBoxFirstKickoff[mflBox_matchups[t].homeId] ? jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(mflBoxFirstKickoff[mflBox_matchups[t].roadId], 2) + y) : jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(mflBoxFirstKickoff[mflBox_matchups[t].homeId], 2) + y)
                }
                catch (e)
                {
                    jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(mflBoxActiveWeekKickoff, 2) + y)
                }
                else L > 0 ? (jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(L / S * 100, 0) + '<span class="MFLBoxDetailsArrow" id="mflBoxExpand_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" onclick="mflBoxExpand(\'' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '\',true)"><i class="fa-regular fa-square-right" aria-hidden="true"></i></span><span class="MFLBoxDetailsArrow" id="mflBoxCollapse_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '" onclick="mflBoxExpand(\'' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '\',false)" style="display:none"><i class="fa-regular fa-square-left" aria-hidden="true"></i></span>' + y), mflBoxDetailsTracker[mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId] && mflBoxExpand(mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId, !0)) : (jQuery('[id^="mflBoxClock_' + mflBox_matchups[t].roadId + "_" + mflBox_matchups[t].homeId + '"]').html(mflBoxGameClock(L / S * 100, 3) + y), parseFloat(mflBox_matchups[t].roadScore) > parseFloat(mflBox_matchups[t].homeScore) && jQuery('[id="mflBoxWin_' + mflBox_matchups[t].roadId + "_" + t + '"]').html('<i class="fa-regular fa-caret-left" aria-hidden="true"></i>'), parseFloat(mflBox_matchups[t].homeScore) > parseFloat(mflBox_matchups[t].roadScore) && jQuery('[id="mflBoxWin_' + mflBox_matchups[t].homeId + "_" + t + '"]').html('<i class="fa-regular fa-caret-left" aria-hidden="true"></i>'));
                jQuery('[id="mflBoxScore_' + mflBox_matchups[t].roadId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].roadScore).toFixed(precision)), "BYE" === mflBox_matchups[t].homeId ? jQuery('[id="mflBoxScore_' + mflBox_matchups[t].homeId + "_" + t + '"]').html(" ") : jQuery('[id="mflBoxScore_' + mflBox_matchups[t].homeId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].homeScore).toFixed(precision)), jQuery('[id="mflBoxPMR_' + mflBox_matchups[t].roadId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].roadPlayerMinutesRemaining)), jQuery('[id="mflBoxPMR_' + mflBox_matchups[t].homeId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].homePlayerMinutesRemaining)), jQuery('[id="mflBoxYTP_' + mflBox_matchups[t].roadId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].roadYetToPlay)), jQuery('[id="mflBoxYTP_' + mflBox_matchups[t].homeId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].homeYetToPlay)), jQuery('[id="mflBoxCP_' + mflBox_matchups[t].roadId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].roadCurrentlyPlaying)), jQuery('[id="mflBoxCP_' + mflBox_matchups[t].homeId + "_" + t + '"]').html(parseFloat(mflBox_matchups[t].homeCurrentlyPlaying))
            }
        }
        else
            for(t = 0; t < mflBox_nflSchedule.length; t++) mflBoxNFLBox(mflBox_nflSchedule[t], t)
    }

    function mflBoxPopulateTiebreaker(e)
    {
        for(var a in mflBoxTiebreaker = new Array, franchiseDatabase) franchiseDatabase.hasOwnProperty(a) && parseInt(franchiseDatabase[a].id) > 0 && (mflBoxTiebreaker[a] = new Array);
        try
        {
            for(var o = 0; o < e.matchup.length; o++)
            {
                var t = e.matchup[o].franchise[0],
                    r = e.matchup[o].franchise[1];
                if(void 0 !== t.tiebreaker && 0 !== t.tiebreaker.length)
                    for(var l = t.tiebreaker.split(","), s = 0; s < l.length; s++) parseInt(l[s]) > 0 && (mflBoxTiebreaker["fid_" + t.id]["pid_" + l[s]] = 1);
                if(void 0 !== r.tiebreaker && 0 !== r.tiebreaker.length)
                    for(l = r.tiebreaker.split(","), s = 0; s < l.length; s++) parseInt(l[s]) > 0 && (mflBoxTiebreaker["fid_" + r.id]["pid_" + l[s]] = 1)
            }
        }
        catch (a)
        {
            try
            {
                t = e.matchup.franchise[0], r = e.matchup.franchise[1];
                if(void 0 !== t.tiebreaker && 0 !== t.tiebreaker.length)
                    for(l = t.tiebreaker.split(","), s = 0; s < l.length; s++) parseInt(l[s]) > 0 && (mflBoxTiebreaker["fid_" + t.id]["pid_" + l[s]] = 1);
                if(void 0 !== r.tiebreaker && 0 !== r.tiebreaker.length)
                    for(l = r.tiebreaker.split(","), s = 0; s < l.length; s++) parseInt(l[s]) > 0 && (mflBoxTiebreaker["fid_" + r.id]["pid_" + l[s]] = 1)
            }
            catch (a)
            {
                for(o = 0; o < e.franchise.length; o++)
                {
                    if(mflBoxAllPlayId !== e.franchise[o].id)
                        if(void 0 !== (t = e.franchise[o]).tiebreaker && 0 !== t.tiebreaker.length)
                            for(l = t.tiebreaker.split(","), s = 0; s < l.length; s++) parseInt(l[s]) > 0 && (mflBoxTiebreaker["fid_" + t.id]["pid_" + l[s]] = 1)
                }
            }
        }
    }

    function mflBoxApplyUncompletedSettings()
    {
        if(mflBoxMFLSchedule)
        {
            var e = [];
            if(mflBoxJSON_projectedScores.hasOwnProperty("projectedScores"))
                for(var a = 0; a < mflBoxJSON_projectedScores.projectedScores.playerScore.length; a++) e["pid_" + mflBoxJSON_projectedScores.projectedScores.playerScore[a].id] = {
                    id: mflBoxJSON_projectedScores.projectedScores.playerScore[a].id,
                    score: mflBoxJSON_projectedScores.projectedScores.playerScore[a].score
                };
            for(a = 0; a < mflBox_matchups.length; a++)
            {
                if(mflBoxIsAllPlay) var o = '<span style="position:absolute;left:0.313rem;bottom:0.438rem;cursor:pointer" title="Swap All Play Team" onclick="mflBoxAllPlayId=\'' + mflBox_matchups[a].roadId + '\';mflBoxNewWeek(0)"><i class="fa-regular fa-arrow-right-arrow-left" aria-hidden="true"></i></span>';
                else o = "";
                if(jQuery('[id^="mflBoxClock_' + mflBox_matchups[a].roadId + "_" + mflBox_matchups[a].homeId + '"]').html(mflBoxGameClock(mflBoxActiveWeekKickoff, 1) + o), "" !== mflBox_matchups[a].roadStarters)
                {
                    for(var t = 0, r = mflBox_matchups[a].roadStarters.split(","), l = 0; l < r.length - 1; l++) e.hasOwnProperty("pid_" + r[l]) && (t += parseFloat(e["pid_" + r[l]].score));
                    jQuery('[id="mflBoxSpread_' + mflBox_matchups[a].roadId + "_" + a + '"]').html('<span class="warning projected" title="Projected Score">' + t.toFixed(precision) + "</span>")
                }
                else jQuery('[id="mflBoxSpread_' + mflBox_matchups[a].roadId + "_" + a + '"]').html('<span class="warning">' + mflBox_matchups[a].roadSpread + "</span>");
                if("" !== mflBox_matchups[a].homeStarters)
                {
                    for(t = 0, r = mflBox_matchups[a].homeStarters.split(","), l = 0; l < r.length - 1; l++) e.hasOwnProperty("pid_" + r[l]) && (t += parseFloat(e["pid_" + r[l]].score));
                    jQuery('[id="mflBoxSpread_' + mflBox_matchups[a].homeId + "_" + a + '"]').html('<span class="warning projected" title="Projected Score">' + t.toFixed(precision) + "</span>")
                }
                else jQuery('[id="mflBoxSpread_' + mflBox_matchups[a].homeId + "_" + a + '"]').html('<span class="warning">' + mflBox_matchups[a].homeSpread + "</span>");
                if(mflBoxIsAllPlay && mflBoxIsTotalPts)
                {
                    try
                    {
                        jQuery('[id="mflBoxScore_' + mflBox_matchups[a].roadId + "_" + a + '"]').html("0")
                    }
                    catch (e)
                    {}
                    try
                    {
                        jQuery('[id="mflBoxScore_' + mflBox_matchups[a].homeId + "_" + a + '"]').html("0")
                    }
                    catch (e)
                    {}
                }
                else
                {
                    try
                    {
                        jQuery('[id="mflBoxScore_' + mflBox_matchups[a].roadId + "_" + a + '"]').html(franchiseDatabase["fid_" + mflBox_matchups[a].roadId].record)
                    }
                    catch (e)
                    {}
                    try
                    {
                        jQuery('[id="mflBoxScore_' + mflBox_matchups[a].homeId + "_" + a + '"]').html(franchiseDatabase["fid_" + mflBox_matchups[a].homeId].record)
                    }
                    catch (e)
                    {}
                }
            }
        }
        else
            for(a = 0; a < mflBox_nflSchedule.length; a++) mflBoxNFLBox(mflBox_nflSchedule[a], a)
    }

    function mflBoxApplyCompletedSettings()
    {
        if(mflBoxMFLSchedule)
            for(var e = 0; e < mflBox_matchups.length; e++)
            {
                if(mflBoxIsAllPlay) var a = '<span style="position:absolute;right:0.313rem;bottom:0.438rem;cursor:pointer" title="Swap All Play Team" onclick="mflBoxAllPlayId=\'' + mflBox_matchups[e].roadId + '\';mflBoxNewWeek(0)"><i class="fa-regular fa-arrow-right-arrow-left" aria-hidden="true"></i></span>';
                else a = "";
                jQuery('[id^="mflBoxClock_' + mflBox_matchups[e].roadId + "_" + mflBox_matchups[e].homeId + '"]').html("Final" + a), jQuery('[id="mflBoxScore_' + mflBox_matchups[e].roadId + "_" + e + '"]').html(parseFloat(mflBox_matchups[e].roadScore).toFixed(precision)), jQuery('[id="mflBoxScore_' + mflBox_matchups[e].homeId + "_" + e + '"]').html(parseFloat(mflBox_matchups[e].homeScore).toFixed(precision)), "W" === mflBox_matchups[e].roadResult && jQuery('[id="mflBoxWin_' + mflBox_matchups[e].roadId + "_" + e + '"]').html('<i class="fa-regular fa-caret-left" aria-hidden="true"></i>'), "W" === mflBox_matchups[e].homeResult && jQuery('[id="mflBoxWin_' + mflBox_matchups[e].homeId + "_" + e + '"]').html('<i class="fa-regular fa-caret-left" aria-hidden="true"></i>')
            }
        else
            for(e = 0; e < mflBox_nflSchedule.length; e++) mflBoxNFLBox(mflBox_nflSchedule[e], e)
    }

    function mflBoxNFLBox(e, a)
    {
        if(0 === parseInt(e.gameSecondsRemaining))
        {
            jQuery('[id^="mflBoxClock_' + e.roadId + "_" + e.homeId + '"]').html("Final"), jQuery('[id="mflBoxScore_' + e.roadId + "_" + a + '"]').html(e.roadScore), jQuery('[id="mflBoxScore_' + e.homeId + "_" + a + '"]').html(e.homeScore);
            var o = "T",
                t = "T";
            parseFloat(e.roadScore) > parseFloat(e.homeScore) && (o = "W", t = "L"), parseFloat(e.homeScore) > parseFloat(e.roadScore) && (o = "L", t = "W"), "W" === o && jQuery('[id="mflBoxWin_' + e.roadId + "_" + a + '"]').html('<i class="fa-regular fa-caret-left" aria-hidden="true"></i>'), "W" === t && jQuery('[id="mflBoxWin_' + e.homeId + "_" + a + '"]').html('<i class="fa-regular fa-caret-left" aria-hidden="true"></i>')
        }
        else 3600 === parseInt(e.gameSecondsRemaining) ? (jQuery('[id^="mflBoxClock_' + e.roadId + "_" + e.homeId + '"]').html(e.clock), jQuery('[id="mflBoxSpread_' + e.roadId + "_" + a + '"]').html('<span class="warning">' + e.roadSpread + "</span>"), jQuery('[id="mflBoxSpread_' + e.homeId + "_" + a + '"]').html('<span class="warning">' + e.homeSpread + "</span>")) : (jQuery('[id^="mflBoxClock_' + e.roadId + "_" + e.homeId + '"]').html(mflBoxGameClock(parseInt(e.gameSecondsRemaining) / 3600 * 100, 3)), jQuery('[id="mflBoxScore_' + e.roadId + "_" + a + '"]').html(e.roadScore), jQuery('[id="mflBoxScore_' + e.homeId + "_" + a + '"]').html(e.homeScore), e.roadRedzone ? jQuery('[id="mflBoxSpread_' + e.roadId + "_" + a + '"]').html('<span class="downDistance redzone">' + e.roadDownAndDist + "</span>") : e.roadPossession ? jQuery('[id="mflBoxSpread_' + e.roadId + "_" + a + '"]').html('<span class="downDistance possession">' + e.roadDownAndDist + "</span>") : jQuery('[id="mflBoxSpread_' + e.roadId + "_" + a + '"]').html(""), e.homeRedzone ? jQuery('[id="mflBoxSpread_' + e.homeId + "_" + a + '"]').html('<span class="downDistance redzone">' + e.homeDownAndDist + "</span>") : e.homePossession ? jQuery('[id="mflBoxSpread_' + e.homeId + "_" + a + '"]').html('<span class="downDistance possession">' + e.homeDownAndDist + "</span>") : jQuery('[id="mflBoxSpread_' + e.homeId + "_" + a + '"]').html(""))
    }

    function mflBoxCheckLive()
    {
        return !(!mflBoxCurrentLiveScoring || mflBoxActiveWeek !== mflBoxCurrentWeek)
    }

    function mflBoxCheckCompletedWeek()
    {
        return mflBoxActiveWeek <= completedWeek
    }

    function mflBoxNewWeek(e)
    {
        if($("#MFLBoxPlayerDetails").hide(), mflBoxPlayerDetailsFid.fid = "", e > 0)
        {
            if(jQuery(".MFLBoxArrowRight").hasClass("MFLBoxArrowFaded")) return !1
        }
        else if(e < 0 && jQuery(".MFLBoxArrowLeft").hasClass("MFLBoxArrowFaded")) return !1;
        try
        {
            clearTimeout(mflBoxTimer)
        }
        catch (e)
        {}
        mflBoxActiveWeek += e, doMFLBoxArrows(), doMFLBoxUpdate(!0)
    }

    function mflBoxGameClockMinutes(e)
    {
        var a = parseInt(60 * e / 100),
            o = 60 * e / 100 - parseInt(60 * e / 100),
            t = parseInt(60 * o);
        return t < 10 && (t = "0" + t), a + ":" + t
    }

    function mflBoxGameClock(e, a)
    {
        if(0 === a || 3 === a)
        {
            if(3 === a)
            {
                if(0 === e) return "Final";
                if(0 === e) return "4th - 0:00"
            }
            return e < 25 ? "4th - " + mflBoxGameClockMinutes(e) : 25 === e ? "4th - 15:00" : e < 50 ? "3rd - " + mflBoxGameClockMinutes(e - 25) : 50 === e ? "Halftime" : e < 75 ? "2nd - " + mflBoxGameClockMinutes(e - 50) : 75 === e ? "2nd - 15:00" : e < 100 ? "1st - " + mflBoxGameClockMinutes(e - 75) : "1st - 15:00"
        }
        if(1 === a)
        {
            var o = new Date(1e3 * e);
            return mflBoxWeekDay[o.getDay()] + " " + mflBoxMonth[o.getMonth()] + " " + o.getDate()
        }
        if(2 === a)
        {
            if((o = new Date(1e3 * e)).getHours() > 11) var t = "pm";
            else t = "am";
            if(o.getHours() > 12) var r = o.getHours() - 12;
            else r = o.getHours();
            return 0 === r && (r = 12), mm = o.getMinutes() < 10 ? "0" + o.getMinutes() : o.getMinutes(), mflBoxWeekDay[o.getDay()] + " " + r + ":" + mm + t
        }
    }

    function doMFLBoxLiveStatsClose()
    {
        $(".MFLBoxLiveStatsWrapper").attr("style", "display:none")
    }

    function doMFLBoxLiveStatsPopup(e, a)
    {
        $(".MFLBoxLiveStatsWrapper").attr("style", "display:none"), $("#MFLBoxLiveStatsWrapper_" + e + "_" + a).removeAttr("style");
        var o = mflBoxGetStatsStr(a);
        "" === o && (o = "no stats"), $("#MFLBoxLiveStatsContent_" + e + "_" + a).html(o + '<span class="MFLBoxLiveStatsClose" onclick="doMFLBoxLiveStatsClose()"></span>')
    }

    function mflBoxGetStatsStr(e)
    {
        var a = [];
        if(null == mflBoxLiveStatsPlayer[e]) return "";
        if(mflBoxLiveStatsPlayer[e].PA > 0)
        {
            var o = [];
            void 0 === mflBoxLiveStatsPlayer[e].PC && (mflBoxLiveStatsPlayer[e].PC = 0), void 0 === mflBoxLiveStatsPlayer[e].PY && (mflBoxLiveStatsPlayer[e].PY = 0), o.push("Pass: " + mflBoxLiveStatsPlayer[e].PC + "-" + mflBoxLiveStatsPlayer[e].PA + "-" + mflBoxLiveStatsPlayer[e].PY), mflBoxLiveStatsPlayer[e]["#P"] > 0 && o.push(mflBoxLiveStatsPlayer[e]["#P"] + " PaTD (" + mflBoxLiveStatsPlayer[e].PS + ")"), mflBoxLiveStatsPlayer[e].IN > 0 && o.push(mflBoxLiveStatsPlayer[e].IN + " Int"), mflBoxLiveStatsPlayer[e].P2 > 0 && o.push(mflBoxLiveStatsPlayer[e].P2 + " Pa2P"), a.push(o.join(", "))
        }
        if(mflBoxLiveStatsPlayer[e].RA > 0)
        {
            o = [];
            void 0 === mflBoxLiveStatsPlayer[e].RY && (mflBoxLiveStatsPlayer[e].RY = 0), o.push("Rush: " + mflBoxLiveStatsPlayer[e].RA + "-" + mflBoxLiveStatsPlayer[e].RY), mflBoxLiveStatsPlayer[e]["#R"] > 0 && o.push(mflBoxLiveStatsPlayer[e]["#R"] + " RuTD (" + mflBoxLiveStatsPlayer[e].RS + ")"), mflBoxLiveStatsPlayer[e].R2 > 0 && o.push(mflBoxLiveStatsPlayer[e].R2 + " Ru2P"), a.push(o.join(", "))
        }
        if(mflBoxLiveStatsPlayer[e].CC > 0)
        {
            o = [];
            void 0 === mflBoxLiveStatsPlayer[e].CY && (mflBoxLiveStatsPlayer[e].CY = 0), o.push("Rec: " + mflBoxLiveStatsPlayer[e].CC + "-" + mflBoxLiveStatsPlayer[e].CY), mflBoxLiveStatsPlayer[e]["#C"] > 0 && o.push(mflBoxLiveStatsPlayer[e]["#C"] + " ReTD (" + mflBoxLiveStatsPlayer[e].RC + ")"), mflBoxLiveStatsPlayer[e].C2 > 0 && o.push(mflBoxLiveStatsPlayer[e].C2 + " Re2P"), a.push(o.join(", "))
        }
        if(mflBoxLiveStatsPlayer[e].FL > 0 && a.push(mflBoxLiveStatsPlayer[e].FL + " Fum Lost"), mflBoxLiveStatsPlayer[e].TK > 0 || mflBoxLiveStatsPlayer[e].AS > 0 || mflBoxLiveStatsPlayer[e].PD > 0)
        {
            o = [];
            if(mflBoxLiveStatsPlayer[e].TK > 0 && o.push(mflBoxLiveStatsPlayer[e].TK + " T"), mflBoxLiveStatsPlayer[e].TFL > 0 && o.push(mflBoxLiveStatsPlayer[e].TKL + " TFL"), mflBoxLiveStatsPlayer[e].AS > 0 && o.push(mflBoxLiveStatsPlayer[e].AS + " A"), mflBoxLiveStatsPlayer[e].SK > 0 && o.push(mflBoxLiveStatsPlayer[e].SK + " SK"), mflBoxLiveStatsPlayer[e].PD > 0 && o.push(mflBoxLiveStatsPlayer[e].PD + " PD"), mflBoxLiveStatsPlayer[e].IC > 0)
            {
                var t = mflBoxLiveStatsPlayer[e].IC + " INT";
                mflBoxLiveStatsPlayer[e]["#IR"] > 0 && (t = t + " " + mflBoxLiveStatsPlayer[e]["#IR"] + " IntTD (" + mflBoxLiveStatsPlayer[e].IR + ")"), o.push(t)
            }
            if(mflBoxLiveStatsPlayer[e].FF > 0 && o.push(mflBoxLiveStatsPlayer[e].FF + " FF"), mflBoxLiveStatsPlayer[e].FC > 0)
            {
                t = mflBoxLiveStatsPlayer[e].FC + " FR";
                mflBoxLiveStatsPlayer[e]["#DR"] > 0 && (t = t + " " + mflBoxLiveStatsPlayer[e]["#DR"] + " FRTD (" + mflBoxLiveStatsPlayer[e].DR + ")"), o.push(t)
            }
            a.push(o.join(", "))
        }
        if(mflBoxLiveStatsPlayer[e]["#A"] > 0 || mflBoxLiveStatsPlayer[e].EA > 0)
        {
            o = [], t = "Kick: ";
            if(mflBoxLiveStatsPlayer[e]["#A"] > 0)
            {
                var r = "";
                void 0 === mflBoxLiveStatsPlayer[e]["#F"] && (mflBoxLiveStatsPlayer[e]["#F"] = 0), void 0 !== mflBoxLiveStatsPlayer[e].FG && (r = "(" + mflBoxLiveStatsPlayer[e].FG + ")"), o.push(t + mflBoxLiveStatsPlayer[e]["#F"] + "-" + mflBoxLiveStatsPlayer[e]["#A"] + " FG " + r), t = ""
            }
            mflBoxLiveStatsPlayer[e].EA > 0 && (void 0 === mflBoxLiveStatsPlayer[e].EP && (mflBoxLiveStatsPlayer[e].EP = 0), o.push(t + mflBoxLiveStatsPlayer[e].EP + "-" + mflBoxLiveStatsPlayer[e].EA + " XP"), t = ""), a.push(o.join(", "))
        }
        return a.join("; ")
    }

    function mflBoxGetTeamStatsStr(e)
    {
        for(var a = [], o = 0; o < show_tstats.length; o++)
        {
            var t = show_tstats[o];
            void 0 !== mflBoxLiveStatsTeam[e][t] && 0 !== mflBoxLiveStatsTeam[e][t] && a.push(mflBoxLiveStatsTeam[e][t] + " " + t)
        }
        return mflBoxLiveStatsTeam[e].FC > 0 && (a.push(mflBoxLiveStatsTeam[e].FC + " FR"), mflBoxLiveStatsTeam[e]["#DR"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#DR"] + " FR TD (" + mflBoxLiveStatsTeam[e].DR + ")")), mflBoxLiveStatsTeam[e].IC > 0 && (a.push(mflBoxLiveStatsTeam[e].IC + " Int"), mflBoxLiveStatsTeam[e]["#IR"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#IR"] + " Int TD (" + mflBoxLiveStatsTeam[e].IR + ")")), mflBoxLiveStatsTeam[e]["#KT"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#KT"] + " KTD (" + mflBoxLiveStatsTeam[e].KO + ")"), mflBoxLiveStatsTeam[e]["#UT"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#UT"] + " PTD (" + mflBoxLiveStatsTeam[e].PR + ")"), mflBoxLiveStatsTeam[e].BLF > 0 && (a.push(mflBoxLiveStatsTeam[e].BLF + " BLF"), mflBoxLiveStatsTeam[e]["#BF"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#BF"] + " BF (" + mflBoxLiveStatsTeam[e].BF + ")")), mflBoxLiveStatsTeam[e].BLP > 0 && (a.push(mflBoxLiveStatsTeam[e].BLP + " BLP"), mflBoxLiveStatsTeam[e]["#BP"] > 0 && a.push(mflBoxLiveStatsTeam[e]["#BP"] + " BP (" + mflBoxLiveStatsTeam[e].BP + ")")), mflBoxLiveStatsTeam[e].BLE > 0 && a.push(mflBoxLiveStatsTeam[e].BLE + " BLE"), a.join(", ")
    }

    function mflBoxNflGameTime(e)
    {
        var a = new Date(1e3 * parseInt(e)),
            o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][a.getDay()],
            t = a.getHours();
        if(t >= 12) var r = "pm";
        else r = "am";
        return 0 === t ? t = 12 : t > 12 && (t -= 12), o + " " + t + ":" + ("0" + a.getMinutes()).substr(-2) + r
    }

    function mflBoxParseLiveStats(e, a)
    {
        mflBoxLiveStatsPlayer = [], mflBoxLiveStatsTeam = [];
        var o = e.split("\n");
        for(var t in o)
            if(o.hasOwnProperty(t))
            {
                var r = o[t].split("|");
                if("DATE" === r[0]) ls_last_update_secs = r[1], ls_last_update = r[2];
                else if("REFRESH" === r[0]);
                else if(isNaN(r[0]))
                    for(void 0 === mflBoxLiveStatsTeam[r[0]] && (mflBoxLiveStatsTeam[r[0]] = {}), j = 1; j < r.length; j++)
                    {
                        l = r[j].split(" ");
                        mflBoxLiveStatsTeam[r[0]][l[0]] = l[1]
                    }
                else
                    for(void 0 === mflBoxLiveStatsPlayer[r[0]] && (mflBoxLiveStatsPlayer[r[0]] = {}), j = 1; j < r.length; j++)
                    {
                        var l = r[j].split(" ");
                        mflBoxLiveStatsPlayer[r[0]][l[0]] = l[1]
                    }
            } for(var s in mflBoxNflGameStatus) mflBoxLiveStatsTeam.hasOwnProperty(s) || (mflBoxLiveStatsTeam[s] = {});
        for(var s in mflBoxNflGameStatus)
            if(mflBoxLiveStatsTeam.hasOwnProperty(s))
                if(mflBoxNflGameStatus.hasOwnProperty(s) || (mflBoxNflGameStatus[s] = {
                        time: 0,
                        isBye: !0
                    }), mflBoxLiveStatsTeam.hasOwnProperty(s) || (mflBoxLiveStatsTeam[s] = new Array), mflBoxNFLKickoff[s] = mflBoxNflGameStatus[s].time, 0 === mflBoxNflGameStatus[s].time) mflBoxNflGameStatus[s].clock = "BYE", mflBoxNflGameStatus[s].secs_left = 0, mflBoxNflGameStatus[s].status = "BYE", mflBoxLiveStatsTeam[s].TPS = "", mflBoxLiveStatsTeam[s].TPA = "";
                else if(mflBoxNflGameStatus[s].time > ls_last_update_secs) mflBoxNflGameStatus[s].clock = mflBoxNflGameTime(mflBoxNflGameStatus[s].time), mflBoxNflGameStatus[s].secs_left = 3600, mflBoxNflGameStatus[s].status = "SCHED", mflBoxLiveStatsTeam[s].TPS = "", mflBoxLiveStatsTeam[s].TPA = "";
        else try
        {
            if(void 0 === mflBoxLiveStatsTeam[s].TPS && (mflBoxLiveStatsTeam[s].TPS = 0), void 0 === mflBoxLiveStatsTeam[mflBoxLiveStatsTeam[s].OPP].TPS && (mflBoxLiveStatsTeam[s].TPA = 0), "" === mflBoxLiveStatsTeam[s].QUARTER || "F" === mflBoxLiveStatsTeam[s].QUARTER) mflBoxNflGameStatus[s].secs_left = 0, mflBoxNflGameStatus[s].status = "OVER";
            else
            {
                var i;
                mflBoxNflGameStatus[s].status = "INPROG";
                var m = mflBoxLiveStatsTeam[s].REMAINING.split(":");
                mflBoxNflGameStatus[s].secs_left = 60 * m[0] + Number(m[1]), "O" === mflBoxLiveStatsTeam[s].QUARTER || mflBoxLiveStatsTeam[s].QUARTER > 4 ? i = "OT" : "H" === mflBoxLiveStatsTeam[s].QUARTER ? (i = "H", mflBoxNflGameStatus[s].secs_left += 1800, custom_is_half = !0) : (mflBoxNflGameStatus[s].secs_left += 900 * (4 - mflBoxLiveStatsTeam[s].QUARTER), i = mflBoxLiveStatsTeam[s].QUARTER + "Q"), i = i + "&nbsp;" + mflBoxLiveStatsTeam[s].REMAINING, mflBoxNflGameStatus[s].clock = i;
                var f = parseInt(mflBoxLiveStatsTeam[s].DOWN);
                if(void 0 !== f && 0 !== f || (f = 1), 1 === f ? f += "st" : 2 === f ? f += "nd" : 3 === f ? f += "rd" : 4 === f && (f += "th"), mflBoxNflGameStatus[s].possession = !1, mflBoxNflGameStatus[s].redzone = !1, mflBoxNflGameStatus[s].down_and_dist = "", void 0 !== mflBoxLiveStatsTeam[s].YARDLINE && "" !== mflBoxLiveStatsTeam[s].YARDLINE)
                {
                    var n = mflBoxLiveStatsTeam[s].YARDLINE.split(":"),
                        c = n[0],
                        d = Number(n[1]);
                    if("50" == c && (c = "", d = 50), void 0 !== mflBoxLiveStatsTeam[s].TOGO && "" !== mflBoxLiveStatsTeam[s].TOGO)
                    {
                        var x = f + "&nbsp;and&nbsp;" + mflBoxLiveStatsTeam[s].TOGO + " at " + c + "&nbsp;" + d;
                        mflBoxNflGameStatus[s].down_and_dist = x, mflBoxLiveStatsTeam[s].POSSESSION > 0 && (mflBoxNflGameStatus[s].possession = !0, c !== s && d < 20 && (mflBoxNflGameStatus[s].redzone = !0))
                    }
                }
            }
        }
        catch (e)
        {}
    }

    function doMFLBoxLiveStats()
    {
        if(liveScoringWeek < 1 || mflBoxActiveWeek > liveScoringWeek)
        {
            for(var e in mflBoxNflGameStatus) mflBoxNflGameStatus.hasOwnProperty(e) && (mflBoxNflGameStatus[e].clock = mflBoxNflGameTime(mflBoxNflGameStatus[e].time), mflBoxNflGameStatus[e].secs_left = 3600, mflBoxNflGameStatus[e].status = "SCHED", mflBoxLiveStatsTeam.hasOwnProperty(e) || (mflBoxLiveStatsTeam[e] = []), mflBoxLiveStatsTeam[e].TPS = "", mflBoxLiveStatsTeam[e].TPA = "");
            return doMFLBoxArrays(), !0
        }
        var a;
        a = Date.now ? Date.now() : (new Date).getTime();
        var o = xmlBaseURL + "live_stats_";
        o = (o += "idp_") + (mflBoxActiveWeek < 10 ? "0" + mflBoxActiveWeek : mflBoxActiveWeek) + ".txt?RANDOM=" + a, jQuery.ajax(
        {
            url: o,
            success: function(e)
            {
                mflBoxParseLiveStats(e, a), doMFLBoxArrays(), e = null
            },
            async: !1
        })
    }

    function doMFLBoxUpdate(e)
    {
        Promise.all([doMFLBoxFantasyWeek(), doMFLBoxNFLWeek(), doMFLBoxProjectedScores()]).then((([a, o, t]) =>
        {
            doMFLBoxLiveStats(), doMFLBoxHTML(e), console.log("refreshing box score . . .")
        }))
    }

    function getMFLBoxNameIcon(e) {
      const fid = "fid_" + e;
      const team = franchiseDatabase[fid];
    
      if (e === "BYE") {
        return '<span class="mflBoxBye">BYE</span>';
      }
      if (e === "AVG") {
        return '<span class="mflBoxAvg">AVG</span>';
      }
    
      let imgHTML = "";
      if (mflBoxUseAbbrev && team.abbrev && mflBoxIconBase && mflBoxIconExt) {
        imgHTML = `<div class="logo-overflow-wrapper"><img src="${mflBoxIconBase + e}.${mflBoxIconExt}" title="${team.name}" style="vertical-align:middle" /></div>`;
      } else if (mflBoxUseAbbrev && team.abbrev && mflBoxUseIcon && team.icon) {
        imgHTML = `<div class="logo-overflow-wrapper"><img src="${team.icon}" title="${team.name}" style="vertical-align:middle" /></div>`;
      } else if (mflBoxUseAbbrev && team.abbrev && mflBoxUseLogo && team.logo) {
        imgHTML = `<div class="logo-overflow-wrapper"><img src="${team.logo}" title="${team.name}" style="vertical-align:middle" /></div>`;
      } else if (mflBoxIconBase && mflBoxIconExt) {
        imgHTML = `<div class="logo-overflow-wrapper"><img src="${mflBoxIconBase + e}.${mflBoxIconExt}" title="${team.name}" /></div>`;
      } else if (mflBoxUseIcon && team.icon) {
        imgHTML = `<div class="logo-overflow-wrapper"><img src="${team.icon}" title="${team.name}" /></div>`;
      } else if (mflBoxUseLogo && team.logo) {
        imgHTML = `<div class="logo-overflow-wrapper"><img src="${team.logo}" title="${team.name}" /></div>`;
      }
    
      // Keep span outside wrapper
      const abbrevHTML = mflBoxUseAbbrev && team.abbrev
        ? `<span style="vertical-align:middle">${team.abbrev}</span>`
        : team.name;
    
      return imgHTML + " " + abbrevHTML;
    }



    function getMFLBoxNFLIcon(e)
    {
        return "" !== mflBoxNFLLogoPath && "" !== mflBoxNFLLogoExt ? '<img src="' + mflBoxNFLLogoPath + e + "." + mflBoxNFLLogoExt + '" title="' + e + '" style="vertical-align:middle;max-height:1rem;max-width:1.25rem" />' : e
    }

    function mflBoxPlayerDetailsClose()
    {
        $("#MFLBoxOverlay").hide(), $("#MFLBoxPlayerDetails").hide();
        const e = document.querySelector("#MFLBoxPlayerDetails");
        try
        {
            bodyScrollLock.enableBodyScroll(e)
        }
        catch (e)
        {}
        mflBoxPlayerDetailsFid.fid = ""
    }

    function doMFLBoxPlayerDetails(e, a)
    {
        mflBoxPlayerDetailsFid.fid = e, mflBoxPlayerDetailsFid.boxid = a;
        var o = "";
        o += '<table align="center" cellspacing="1" class="report" id="MFLBoxPlayerDetailsTable"><caption><span>' + franchiseDatabase["fid_" + e].name + '</span><span class="MFLBoxPlayerDetailsClose" onclick="mflBoxPlayerDetailsClose()">X</span></caption>';
        for(var t = 0; t < 4; t++)
            if(3 !== t || mflBoxShowNonStarter)
            {
                var r = "";
                0 === t && (o += '<tr class="MFLBoxPlayerDetailsHeader"><th colspan="5">Players Games In Progress</th></tr>'), 1 === t && (o += '<tr class="MFLBoxPlayerDetailsHeader"><th colspan="5">Players Games Scheduled</th></tr>'), 2 === t && (o += '<tr class="MFLBoxPlayerDetailsHeader"><th colspan="5">Players Games Over</th></tr>'), 3 === t && (o += '<tr class="MFLBoxPlayerDetailsHeader"><th colspan="5">Bench Player</th></tr>');
                for(var l = 0, s = 0; s < mflBoxPositionSort.length; s++) try
                {
                    if(3 === t) var i = mflBoxFranchise["fid_" + e].bench;
                    else i = mflBoxFranchise["fid_" + e].starter;
                    for(var m in i)
                        if(i.hasOwnProperty(m) && playerDatabase["pid_" + m].position === mflBoxPositionSort[s])
                        {
                            var f = !1;
                            mflBox_byeWeek.hasOwnProperty(playerDatabase["pid_" + m].team) && mflBox_byeWeek[playerDatabase["pid_" + m].team] === mflBoxActiveWeek && (f = !0);
                            var n = !1;
                            if(!f && (0 === t || 3 === t) && parseInt(i[m].gsr) > 0 && parseInt(i[m].gsr) < 3600)
                            {
                                var c = mflBoxGameClock(parseInt(i[m].gsr) / 3600 * 100, 3),
                                    d = '<span class="MFLBoxLiveStatsScore" onmouseout="doMFLBoxLiveStatsClose()" onmouseover="doMFLBoxLiveStatsPopup(\'' + e + "','" + m + "')\">" + i[m].score + '</span><span id="MFLBoxLiveStatsWrapper_' + e + "_" + m + '" class="MFLBoxLiveStatsWrapper" style="display:none"><span  id="MFLBoxLiveStatsContent_' + e + "_" + m + '" class="MFLBoxLiveStatsContent"></span><span class="MFLBoxLiveStatsArrow"></span></span>';
                                try
                                {
                                    if((B = mflBoxPlayerProjected[m] * (parseInt(i[m].gsr) / 3600) + parseFloat(i[m].score)) > mflBoxPlayerProjected[m]) var x = '<span title="On Pace Points" class="MFLPaceScore MFLPaceScorePositive">' + B.toFixed(precision) + "</span>";
                                    else x = '<span title="On Pace Points" class="MFLPaceScore MFLPaceScoreNegative">' + B.toFixed(precision) + "</span>"
                                }
                                catch (e)
                                {
                                    x = (0).toFixed(precision)
                                }
                                n = !0
                            }
                            if(!f && (1 === t || 3 === t) && 3600 === parseInt(i[m].gsr))
                            {
                                c = mflBoxGameClock(mflBoxNFLKickoff[playerDatabase["pid_" + m].team], 2), d = i[m].score;
                                try
                                {
                                    x = '<span title="Projected Points" class="MFLPaceScore">' + (B = mflBoxPlayerProjected[m].toFixed(precision)) + "</span>"
                                }
                                catch (e)
                                {
                                    x = (0).toFixed(precision)
                                }
                                n = !0
                            }
                            if((2 === t || 3 === t) && 0 === parseInt(i[m].gsr))
                            {
                                if(f) c = "--";
                                else try
                                {
                                    c = mflBox_nflOpponents[playerDatabase["pid_" + m].team].result
                                }
                                catch (e)
                                {
                                    c = ""
                                }
                                if(f) d = "--";
                                else var d = '<span class="MFLBoxLiveStatsScore" style="cursor: pointer" onmouseout="doMFLBoxLiveStatsClose()" onmouseover="doMFLBoxLiveStatsPopup(\'' + e + "','" + m + "')\">" + i[m].score + '</span><span id="MFLBoxLiveStatsWrapper_' + e + "_" + m + '" class="MFLBoxLiveStatsWrapper" style="display:none"><span  id="MFLBoxLiveStatsContent_' + e + "_" + m + '" class="MFLBoxLiveStatsContent"></span><span class="MFLBoxLiveStatsArrow"></span></span>';
                                if(f) x = "--";
                                else try
                                {
                                    var B;
                                    x = '<span title="Original Projection" class="MFLPaceScore">' + (B = mflBoxPlayerProjected[m]).toFixed(precision) + "</span>";
                                    if(parseFloat(i[m].score) > mflBoxPlayerProjected[m]) d = '<span class="MFLPaceScorePositive">' + d + "</span>";
                                    else d = '<span class="MFLPaceScoreNegative" style="cursor: pointer;">' + d + "</span>"
                                }
                                catch (e)
                                {
                                    x = (0).toFixed(precision)
                                }
                                n = !0
                            }
                            if(n)
                            {
                                if(f) var p = "BYE";
                                else try
                                {
                                    if(mflBox_nflOpponents[playerDatabase["pid_" + m].team].isHome) p = "v " + mflBox_nflOpponents[playerDatabase["pid_" + m].team].opponent;
                                    else p = "@ " + mflBox_nflOpponents[playerDatabase["pid_" + m].team].opponent
                                }
                                catch (e)
                                {}
                                try
                                {
                                    var h = ' (<span style="color:red" title="' + mfl_injuries.player["pid_" + m].details + '">' + mfl_injuries.player["pid_" + m].code + "</span>)"
                                }
                                catch (e)
                                {
                                    h = ""
                                }
                                if(l % 2) var u = "eventablerow";
                                else u = "oddtablerow";
                                3 === t ? 3600 === parseInt(i[m].gsr) ? r += '<tr class="' + u + '"><td colspan="2">' + playerDatabase["pid_" + m].name + " " + playerDatabase["pid_" + m].team + " " + playerDatabase["pid_" + m].position + h + '</td><td style="text-align:center;white-space:nowrap">' + p + '</td><td style="text-align:center">' + x + ' </td><td style="text-align:center">-- </td></tr>' : r += '<tr class="' + u + '"><td colspan="2">' + playerDatabase["pid_" + m].name + " " + playerDatabase["pid_" + m].team + " " + playerDatabase["pid_" + m].position + h + '</td><td style="text-align:center;white-space:nowrap">' + p + '</td><td style="text-align:center">' + x + ' </td><td style="text-align:center">' + d + " </td></tr>" : r += 1 === t ? '<tr class="' + u + '"><td>' + playerDatabase["pid_" + m].name + " " + playerDatabase["pid_" + m].team + " " + playerDatabase["pid_" + m].position + h + '</td><td style="text-align:center;white-space:nowrap">' + p + '</td><td colspan="2" style="text-align:center">' + c + '</td><td style="text-align:center">' + x + " </td></tr>" : '<tr class="' + u + '"><td>' + playerDatabase["pid_" + m].name + " " + playerDatabase["pid_" + m].team + " " + playerDatabase["pid_" + m].position + h + '</td><td style="text-align:center;white-space:nowrap">' + p + '</td><td style="text-align:center">' + c + '</td><td style="text-align:center">' + x + ' </td><td style="text-align:center">' + d + " </td></tr>", l++
                            }
                        }
                }
                catch (e)
                {}
                "" === r ? o += '<tr class="oddtablerow"><td colspan="5" class="MFLBoxPlayerDetailsNone">NONE</td></tr>' : (0 === t && (o += '<tr class="MFLBoxPlayerDetailsSubHeader"><th style="text-align:left">Player</th><th>Opp</th><th>Clock</th><th>Pace</th><th>Actual</th></tr>'), 1 === t && (o += '<tr class="MFLBoxPlayerDetailsSubHeader"><th style="text-align:left">Player</th><th>Opp</th><th colspan="2">Game Time</th><th>Proj.</th></tr>'), 2 === t && (o += '<tr class="MFLBoxPlayerDetailsSubHeader"><th style="text-align:left">Player</th><th>Opp</th><th>Result</th><th>Proj.</th><th>Actual</th></tr>'), 3 === t && (o += '<tr class="MFLBoxPlayerDetailsSubHeader"><th colspan="2" style="text-align:left">Player</th><th>Opp</th><th>Proj/Pace</th><th>Actual</th></tr>'), o += r)
            } if(mflBoxIncludeTiebreaker)
        {
            o += '<tr class="MFLBoxPlayerDetailsHeader"><th colspan="5">Tiebreaker(s)</th></tr>';
            l = 0;
            for(var y in mflBoxTiebreaker["fid_" + e])
                if(mflBoxTiebreaker["fid_" + e].hasOwnProperty(y))
                {
                    if(l % 2) u = "eventablerow";
                    else u = "oddtablerow";
                    o += '<tr class="' + u + '"><td colspan="5">' + playerDatabase[y].name + " " + playerDatabase[y].team + " " + playerDatabase[y].position + "</td></tr>", l++
                }
        }
        o += "</tbody></table>", $("#MFLBoxOverlay").show();
        const _ = document.querySelector("#MFLBoxPlayerDetails");
        try
        {
            bodyScrollLock.disableBodyScroll(_)
        }
        catch (e)
        {}
        $("#MFLBoxPlayerDetails").html(o).show(), jQuery(document).ready((function()
        {
            $('#MFLBoxPlayerDetails td span.MFLBoxLiveStatsScore:contains("undefined")').parents("td").replaceWith('<td style="text-align:center">-- </td>')
        }))
    }

    function doMFLBoxHTML(e)
    {
        var a = "";
        if (mflBoxMFLSchedule) {
            a += '<table class="MFLGameLinks fantasyBoxMatchup"><tbody><tr>';
            for (var o = 0; o < mflBox_matchups.length; o++) {
                const roadId = mflBox_matchups[o].roadId;
                const homeId = mflBox_matchups[o].homeId;
        
                a += '<td class="matchupLolite">';
                a += '<table class="MFLGameTable matchupLolite" id="mflBoxMatchup_' + o + '">';
                a += "<tbody>";
        
                // Road team row
                if (mflBoxActiveWeek <= completedWeek || mflBoxActiveWeek === liveScoringWeek) {
                    a += '<tr class="MFLBoxPlayerDetailsTR fid-' + roadId + '" onclick="doMFLBoxPlayerDetails(\'' + roadId + '\',' + o + ')">';
                } else {
                    a += '<tr class="fid-' + roadId + '">';
                }
                a += '<td class="MFLLiveTeam">' + getMFLBoxNameIcon(roadId) + "</td>";
                a += '<td class="MFLPaceSpread" id="mflBoxSpread_' + roadId + '_' + o + '"></td>';
                a += '<td class="MFLPaceScore" id="mflBoxPace_' + roadId + '_' + o + '"></td>';
                a += '<td class="MFLLiveScore" id="mflBoxScore_' + roadId + '_' + o + '" style="text-align:right"></td>';
                a += '<td class="MFLWinMarker" id="mflBoxWin_' + roadId + '_' + o + '"></td>';
                if (mflBoxCheckLive()) {
                    a += '<td class="MFLExtras MFLExtrasPMR MFLExtras_' + roadId + '_' + homeId + '" id="mflBoxPMR_' + roadId + '_' + o + '"></td>';
                    a += '<td class="MFLExtras MFLExtrasYTP MFLExtras_' + roadId + '_' + homeId + '" id="mflBoxYTP_' + roadId + '_' + o + '"></td>';
                    a += '<td class="MFLExtras MFLExtrasCP MFLExtras_' + roadId + '_' + homeId + '" id="mflBoxCP_' + roadId + '_' + o + '"></td>';
                }
                a += '</tr>';
        
                // Home team row
                if (mflBoxActiveWeek <= completedWeek || mflBoxActiveWeek === liveScoringWeek) {
                    a += '<tr class="MFLBoxPlayerDetailsTR fid-' + homeId + '" onclick="doMFLBoxPlayerDetails(\'' + homeId + '\',' + o + ')">';
                } else {
                    a += '<tr class="fid-' + homeId + '">';
                }
                a += '<td class="MFLLiveTeam">' + getMFLBoxNameIcon(homeId) + "</td>";
                a += '<td class="MFLPaceSpread" id="mflBoxSpread_' + homeId + '_' + o + '"></td>';
                a += '<td class="MFLPaceScore" id="mflBoxPace_' + homeId + '_' + o + '"></td>';
                a += '<td class="MFLLiveScore" id="mflBoxScore_' + homeId + '_' + o + '" style="text-align:right"></td>';
                a += '<td class="MFLWinMarker" id="mflBoxWin_' + homeId + '_' + o + '"></td>';
                if (mflBoxCheckLive()) {
                    a += '<td class="MFLExtras MFLExtrasPMR MFLExtras_' + roadId + '_' + homeId + '" id="mflBoxPMR_' + homeId + '_' + o + '"></td>';
                    a += '<td class="MFLExtras MFLExtrasYTP MFLExtras_' + roadId + '_' + homeId + '" id="mflBoxYTP_' + homeId + '_' + o + '"></td>';
                    a += '<td class="MFLExtras MFLExtrasCP MFLExtras_' + roadId + '_' + homeId + '" id="mflBoxCP_' + homeId + '_' + o + '"></td>';
                }
                a += '</tr>';
        
                // Clock row with both IDs
                a += "   <tr>";
                a += '<td colspan="5" class="MFLLiveClock" style="position:relative" id="mflBoxClock_' + roadId + '_' + homeId + '"></td>';
                if (mflBoxCheckLive()) {
                    a += '<td class="MFLExtras MFLExtrasPMR MFLExtras_' + roadId + '_' + homeId + '" title="Player Minutes Remaining">PMR</td>';
                    a += '<td class="MFLExtras MFLExtrasYTP MFLExtras_' + roadId + '_' + homeId + '" title="Players Yet To Play">YTP</td>';
                    a += '<td class="MFLExtras MFLExtrasCP MFLExtras_' + roadId + '_' + homeId + '" title="Players Currently Playing">CP</td>';
                }
                a += '</tr>';
        
                a += "</tbody></table></td>";
            }
            a += "</tr></tbody></table>";
        }
        
        else
        {
            if(a += '<table class="MFLGameLinks NFLBoxMatchup"><tbody><tr>', void 0 !== mflBox_nflSchedule.length)
                for(o = 0; o < mflBox_nflSchedule.length; o++)
                {
                    parseInt(mflBox_nflSchedule[o].secs_left);
                    a += '<td class="matchupLolite">', a += ' <table class="MFLGameTable matchupLolite" id="mflBoxMatchup_' + o + '">', a += "  <tbody>", a += "   <tr>", a += '    <td class="MFLLiveTeam">' + getMFLBoxNFLIcon(mflBox_nflSchedule[o].roadId) + ' <span class="MFLLiveAbbrev" style="vertical-align:middle">' + mflBox_nflSchedule[o].roadId + "</span></td>", a += '    <td class="MFLPaceSpread" id="mflBoxSpread_' + mflBox_nflSchedule[o].roadId + "_" + o + '"></td>', a += '    <td class="MFLPaceScore" id="mflBoxPace_' + mflBox_nflSchedule[o].roadId + "_" + o + '"></td>', a += '    <td class="MFLLiveScore" id="mflBoxScore_' + mflBox_nflSchedule[o].roadId + "_" + o + '" style="text-align:right"></td>', a += '    <td class="MFLWinMarker" id="mflBoxWin_' + mflBox_nflSchedule[o].roadId + "_" + o + '"></td>', a += "   </tr>", a += "   <tr>", a += '    <td class="MFLLiveTeam">' + getMFLBoxNFLIcon(mflBox_nflSchedule[o].homeId) + ' <span class="MFLLiveAbbrev" style="vertical-align:middle">' + mflBox_nflSchedule[o].homeId + "</span></td>", a += '    <td class="MFLPaceSpread" id="mflBoxSpread_' + mflBox_nflSchedule[o].homeId + "_" + o + '"></td>', a += '    <td class="MFLPaceScore" id="mflBoxPace_' + mflBox_nflSchedule[o].homeId + "_" + o + '"></td>', a += '    <td class="MFLLiveScore" id="mflBoxScore_' + mflBox_nflSchedule[o].homeId + "_" + o + '" style="text-align:right"></td>', a += '    <td class="MFLWinMarker" id="mflBoxWin_' + mflBox_nflSchedule[o].homeId + "_" + o + '"></td>', a += "   </tr>", a += "   <tr>", a += '    <td colspan="5" class="MFLLiveClock" id="mflBoxClock_' + mflBox_nflSchedule[o].roadId + "_" + mflBox_nflSchedule[o].homeId + '"></td>', a += "   </tr>", a += "  </tbody>", a += " </table>", a += "</td>"
                }
            a += "</tr></tbody></table>"
        }
        if(jQuery("#MFLBoxMatchups").html(a), e && jQuery("#MFLBoxMatchups").scrollLeft(0), mflBoxCheckLive()) mflBoxApplyLiveSettings(), mflBoxTimer = setTimeout("doMFLBoxUpdate(false)", 1e3 * mflBoxUpdateSeconds);
        else if(mflBoxCheckCompletedWeek())
        {
            mflBoxApplyCompletedSettings();
            try
            {
                mflBoxProjectedScoresHistorical()
            }
            catch (e)
            {}
        }
        else mflBoxApplyUncompletedSettings();
        mflBoxMFLSchedule && "" !== mflBoxPlayerDetailsFid.fid && doMFLBoxPlayerDetails(mflBoxPlayerDetailsFid.fid, mflBoxPlayerDetailsFid.boxid), mflBoxShowMFLByeTeams && jQuery("head").append("<style>#MFLBoxContainer .MFLGameLinks.fantasyBoxMatchup{width:100%}</style>"), mflBoxHideNFLMatchups && jQuery("head").append("<style>#MFLBoxNFLCell,#MFLBoxMFLCell{display:none!important}</style>"), mflBoxHidePaceScores && jQuery("head").append("<style>.MFLGameTable .MFLPaceScore,.MFLGameTable .MFLPaceScore .warning{font-size:0!important;color:transparent!important}</style>")
    }

    function mflBoxLeagueSettings()
    {
        mflBoxStartWeek = startWeek, mflBoxLastRegularSeasonWeek = standingsEndWeek, mflBoxEndWeek = void 0 === endWeek ? 18 : endWeek, completedWeek === liveScoringWeek ? (mflBoxCurrentWeek = completedWeek, mflBoxCurrentLiveScoring = !mflBoxCheckWeeklyResultsForScore(mflBoxCurrentWeek)) : (mflBoxCurrentWeek = liveScoringWeek, mflBoxCurrentLiveScoring = !0), mflBoxCurrentWeek > mflBoxEndWeek && (mflBoxCurrentWeek = mflBoxEndWeek, mflBoxCurrentLiveScoring = !1), 0 === liveScoringWeek && (mflBoxCurrentLiveScoring = !1), mflBoxCurrentWeek < 1 && (mflBoxCurrentWeek = 1), mflBoxActiveWeek = mflBoxCurrentWeek;
        for(var e = 0; e < reportNflByeWeeks_ar.nflByeWeeks.team.length; e++) mflBox_byeWeek[reportNflByeWeeks_ar.nflByeWeeks.team[e].id] = parseInt(reportNflByeWeeks_ar.nflByeWeeks.team[e].bye_week)
    }

    function triggerReportMflBox()
    {
        triggerReportMflBox_ran = !0, mflBoxLeagueSettings(), Promise.all([doMFLBoxFantasyWeek(), doMFLBoxNFLWeek(), doMFLBoxProjectedScores()]).then((([e, a, o]) =>
        {
            doMFLBoxLiveStats(), doMFLBoxArrows(), mflBoxHideFantasyMatchups && (mflBoxMFLSchedule = !1, mflBoxNewWeek(0), jQuery("head").append("<style>#MFLBoxNFLCell,#MFLBoxMFLCell{display:none!important}</style>")), doMFLBoxHTML(!0), checkForBoxscores()
        }))
    }

    function mflBoxListenerCheck()
    {
        triggerReportMflBox_count++, "undefined" != typeof reportDailyFullyLoaded && reportDailyFullyLoaded && (clearInterval(mflBoxListener), triggerReportMflBox_ran || triggerReportMflBox()), triggerReportMflBox_count > 50 && (clearInterval(mflBoxListener), console.log("Stop trying Mini-Boxscore after 5 seconds"))
    }
    if(void 0 === triggerReportMflBox_ran) var triggerReportMflBox_ran = !1;
    if(void 0 === triggerReportMflBox_count) var triggerReportMflBox_count = 0;
    if(doMFLBox)
    {
        if(void 0 === mflBoxListener) var mflBoxListener = setInterval("mflBoxListenerCheck()", 100);
        var boxScoresInterval = setInterval(checkForBoxscores, 1500),
            boxScorestimeout = setTimeout(stopChecking, 1e4);

        function checkForBoxscores()
        {
            var e = document.querySelector("#MFLBoxMatchups");
            e && (e.querySelector("td") ? (clearInterval(boxScoresInterval), clearTimeout(boxScorestimeout)) : doMFLBoxHTML(!0))
        }

        function stopChecking()
        {
            clearInterval(boxScoresInterval)
        }
    }
}
