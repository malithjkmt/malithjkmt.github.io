/**
 * Created by Malith on 11/22/2015.
 */

function displayClock(){
    FlipClock.Lang.Custom = { days:'Days', hours:'Hours', minutes:'Minutes', seconds:'Seconds' };
    var opts = {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'Custom'
    };
    opts.classes = {
        active: 'flip-clock-active',
        before: 'flip-clock-before',
        divider: 'flip-clock-divider',
        dot: 'flip-clock-dot',
        label: 'flip-clock-label',
        flip: 'flip',
        play: 'play',
        wrapper: 'flip-clock-small-wrapper'
    };
    var countdown = 1456597800 - ((new Date().getTime())/1000); // from: 02/28/2016 12:00 am +0530
    countdown = Math.max(1, countdown);
    $('.clock-builder-output').FlipClock(countdown, opts);
}
