(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"scrollBarMargin":2,"xrPanelsEnabled":true,"start":"this.init()","id":"rootPlayer","class":"Player","data":{"locales":{"de":"locale/de.txt"},"name":"Player428","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false},"defaultLocale":"de","history":{},"displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"propagateClick":false,"layout":"absolute","hash": "318633032b49019c62c4bb8a7228a675116cd6e484c624c789bacb6d6fa42059", "definitions": [{"initialSequence":"this.sequence_0D335930_06B8_C8EC_4165_A927EE50F6B0","enterPointingToHorizon":true,"id":"panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera"},{"playbackBarHeadShadow":true,"toolTipPaddingBottom":4,"subtitlesFontColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","progressBorderColor":"#000000","class":"ViewerArea","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowColor":"#333138","progressBottom":10,"subtitlesTop":0,"progressHeight":2,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderSize":0,"progressBarBorderRadius":2,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"subtitlesBottom":50,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"toolTipPaddingRight":6,"playbackBarHeadShadowVerticalLength":0,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"progressLeft":"33%","toolTipFontColor":"#606060","toolTipTextShadowColor":"#000000","playbackBarBottom":5,"playbackBarHeadShadowOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","toolTipFontFamily":"Arial","vrThumbstickRotationStep":20,"playbackBarProgressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"id":"MainViewer","toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","subtitlesFontFamily":"Arial","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBorderRadius":0,"vrPointerSelectionTime":2000,"toolTipPaddingLeft":6,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","propagateClick":false,"playbackBarBorderSize":0,"toolTipPaddingTop":4,"firstTransitionDuration":0,"subtitlesBackgroundColor":"#000000","toolTipBorderColor":"#767676","minHeight":50,"minWidth":100,"subtitlesGap":0,"progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarHeadShadowBlurRadius":3,"playbackBarBackgroundOpacity":1,"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowOpacity":1,"playbackBarLeft":0,"progressBarBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerColor":"#FFFFFF","height":"100%","playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"width":"100%","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderSize":0},{"thumbnailUrl":"media/panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC_t.jpg","frames":[{"cube":{"levels":[{"rowCount":9,"height":4608,"url":"media/panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":54,"tags":"ondemand","width":27648},{"rowCount":5,"height":2560,"url":"media/panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":30,"tags":"ondemand","width":15360},{"rowCount":3,"height":1536,"url":"media/panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC_0/{face}/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC_t.jpg"}],"hfovMax":130,"hfov":360,"vfov":135,"label":trans('panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC.label'),"id":"panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC","class":"Panorama","data":{"label":"streetview_rYSKRB2HgiKK1WaW53SPAA_high"}},{"initialSequence":"this.sequence_0D0C8982_06B8_CBAF_4189_0D229FC9A0D4","enterPointingToHorizon":true,"id":"panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera"},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"class":"PanoramaPlayer","aaEnabled":true,"arrowKeysAction":"translate"},{"initialSequence":"this.sequence_0D097FDF_06BB_4755_415D_E22C15313473","enterPointingToHorizon":true,"id":"panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera"},{"thumbnailUrl":"media/panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90_t.jpg","frames":[{"cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90_0/{face}/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90_t.jpg"}],"hfovMax":130,"hfov":360,"vfov":135,"label":trans('panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90.label'),"id":"panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90","class":"Panorama","data":{"label":"streetview_VZoCq0hPH_vxFaQAnjjhXg_high"}},{"thumbnailUrl":"media/panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7_t.jpg","frames":[{"cube":{"levels":[{"rowCount":11,"height":5632,"url":"media/panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":66,"tags":"ondemand","width":33792},{"rowCount":6,"height":3072,"url":"media/panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","width":18432},{"rowCount":3,"height":1536,"url":"media/panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","width":9216},{"rowCount":2,"height":1024,"url":"media/panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7_0/{face}/4/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7_t.jpg"}],"hfovMax":130,"hfov":360,"vfov":135,"label":trans('panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7.label'),"id":"panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7","class":"Panorama","data":{"label":"streetview_8lsTTnCPOWeV2wF_PbkZ-A_high"}},{"id":"mainPlayList","items":[{"camera":"this.panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90_camera","media":"this.panorama_0A7B542A_06B8_B8FF_4177_488E5C1F9C90","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC_camera","media":"this.panorama_0A6F806A_06B8_B97F_418A_C40D6FB6B2BC","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7_camera","media":"this.panorama_0A156D8D_06B8_CBB5_417C_164DB9FEC7E7","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}],"class":"PlayList"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_0D335930_06B8_C8EC_4165_A927EE50F6B0","class":"PanoramaCameraSequence"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_0D0C8982_06B8_CBAF_4189_0D229FC9A0D4","class":"PanoramaCameraSequence"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_0D097FDF_06BB_4755_415D_E22C15313473","class":"PanoramaCameraSequence"}],"minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","minWidth":0,"gap":10,"height":"100%","scripts":{"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"shareSocial":TDV.Tour.Script.shareSocial,"executeJS":TDV.Tour.Script.executeJS,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"clone":TDV.Tour.Script.clone,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setValue":TDV.Tour.Script.setValue,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"startMeasurement":TDV.Tour.Script.startMeasurement,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getMainViewer":TDV.Tour.Script.getMainViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"downloadFile":TDV.Tour.Script.downloadFile,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"disableVR":TDV.Tour.Script.disableVR,"resumePlayers":TDV.Tour.Script.resumePlayers,"getKey":TDV.Tour.Script.getKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"openLink":TDV.Tour.Script.openLink,"mixObject":TDV.Tour.Script.mixObject,"unregisterKey":TDV.Tour.Script.unregisterKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizFinish":TDV.Tour.Script.quizFinish,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showWindowBase":TDV.Tour.Script.showWindowBase,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getOverlays":TDV.Tour.Script.getOverlays,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showWindow":TDV.Tour.Script.showWindow,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupImage":TDV.Tour.Script.showPopupImage,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"unloadViewer":TDV.Tour.Script.unloadViewer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"textToSpeech":TDV.Tour.Script.textToSpeech,"cloneBindings":TDV.Tour.Script.cloneBindings,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getComponentByName":TDV.Tour.Script.getComponentByName,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"enableVR":TDV.Tour.Script.enableVR,"init":TDV.Tour.Script.init,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"registerKey":TDV.Tour.Script.registerKey,"isPanorama":TDV.Tour.Script.isPanorama,"createTween":TDV.Tour.Script.createTween,"setMapLocation":TDV.Tour.Script.setMapLocation,"playAudioList":TDV.Tour.Script.playAudioList,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"toggleVR":TDV.Tour.Script.toggleVR,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaByName":TDV.Tour.Script.getMediaByName,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"translate":TDV.Tour.Script.translate,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowScore":TDV.Tour.Script.quizShowScore,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"existsKey":TDV.Tour.Script.existsKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags},"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.9, Tue May 12 2026