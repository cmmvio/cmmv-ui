const Loaders = [
    {
        name: "loader-3dots-fade",
        path: "components/loader/Loader3DotsFade.vue",
        code: `<Loader3DotsFade />`
    },
    {
        name: "loader-3dots-move",
        path: "components/loader/Loader3DotsMove.vue",
        code: `<Loader3DotsMove />`
    },
    {
        name: "loader-3dots-rotate",
        path: "components/loader/Loader3DotsRotate.vue",
        code: `<Loader3DotsRotate />`
    },
    {
        name: "loader-3dots-scale",
        path: "components/loader/Loader3DotsScale.vue",
        code: `<Loader3DotsScale />`
    },
    {
        name: "loader-3dots-scale-middle",
        path: "components/loader/Loader3DotsScaleMiddle.vue",
        code: `<Loader3DotsScaleMiddle />`
    },
    {
        name: "loader-6dots-rotate",
        path: "components/loader/Loader6DotsRotate.vue",
        code: `<Loader6DotsRotate />`
    },
    {
        name: "loader-6dots-scale",
        path: "components/loader/Loader6DotsScale.vue",
        code: `<Loader6DotsScale />`
    },
    {
        name: "loader-6dots-scale-middle",
        path: "components/loader/Loader6DotsScaleMiddle.vue",
        code: `<Loader6DotsScaleMiddle />`
    },
    {
        name: "loader-8dots-rotate",
        path: "components/loader/Loader8DotsRotate.vue",
        code: `<Loader8DotsRotate />`
    },
    {
        name: "loader-12dots-scale-rotate",
        path: "components/loader/Loader12DotsScaleRotate.vue",
        code: `<Loader12DotsScaleRotate />`
    },
    {
        name: "loader-90ring",
        path: "components/loader/Loader90Ring.vue",
        code: `<Loader90Ring />`
    },
    {
        name: "loader-180ring",
        path: "components/loader/Loader180Ring.vue",
        code: `<Loader180Ring />`
    },
    {
        name: "loader-180ring-with-bg",
        path: "components/loader/Loader180RingWithBg.vue",
        code: `<Loader180RingWithBg />`
    },
    {
        name: "loader-270ring",
        path: "components/loader/Loader270Ring.vue",
        code: `<Loader270Ring />`
    },
    {
        name: "loader-270ring-with-bg",
        path: "components/loader/Loader270RingWithBg.vue",
        code: `<Loader270RingWithBg />`
    },
    {
        name: "loader-bars-fade",
        path: "components/loader/LoaderBarsFade.vue",
        code: `<LoaderBarsFade />`
    },
    {
        name: "loader-bars-rotate-fade",
        path: "components/loader/LoaderBarsRotateFade.vue",
        code: `<LoaderBarsRotateFade />`
    },
    {
        name: "loader-bars-rotate-scale",
        path: "components/loader/LoaderBarsScale.vue",
        code: `<LoaderBarsScale />`
    },
    {
        name: "loader-bars-rotate-scale-fade",
        path: "components/loader/LoaderBarsScaleFade.vue",
        code: `<LoaderBarsScaleFade />`
    },
    {
        name: "loader-bars-rotate-scale-middle",
        path: "components/loader/LoaderBarsScaleMiddle.vue",
        code: `<LoaderBarsScaleMiddle />`
    },
    {
        name: "loader-blocks-scale",
        path: "components/loader/LoaderBlocksScale.vue",
        code: `<LoaderBlocksScale />`
    },
    {
        name: "loader-blocks-shuffle2",
        path: "components/loader/LoaderBlocksShuffle2.vue",
        code: `<LoaderBlocksShuffle2 />`
    },
    {
        name: "loader-blocks-shuffle3",
        path: "components/loader/LoaderBlocksShuffle3.vue",
        code: `<LoaderBlocksShuffle3 />`
    },
    {
        name: "loader-blocks-wave",
        path: "components/loader/LoaderBlocksWave.vue",
        code: `<LoaderBlocksWave />`
    },
    {
        name: "loader-bouncing-ball",
        path: "components/loader/LoaderBouncingBall.vue",
        code: `<LoaderBouncingBall />`
    },
    {
        name: "loader-clock",
        path: "components/loader/LoaderClock.vue",
        code: `<LoaderClock />`
    },
    {
        name: "loader-dot-revolve",
        path: "components/loader/LoaderDotRevolve.vue",
        code: `<LoaderDotRevolve />`
    },
    {
        name: "loader-eclipse",
        path: "components/loader/LoaderEclipse.vue",
        code: `<LoaderEclipse />`
    },
    {
        name: "loader-eclipse-half",
        path: "components/loader/LoaderEclipseHalf.vue",
        code: `<LoaderEclipseHalf />`
    },
    {
        name: "loader-gooey-balls1",
        path: "components/loader/LoaderGooeyBalls1.vue",
        code: `<LoaderGooeyBalls1 />`
    },
    {
        name: "loader-gooey-balls2",
        path: "components/loader/LoaderGooeyBalls2.vue",
        code: `<LoaderGooeyBalls2 />`
    },
    {
        name: "loader-pulse",
        path: "components/loader/LoaderPulse.vue",
        code: `<LoaderPulse />`
    },
    {
        name: "loader-pulse2",
        path: "components/loader/LoaderPulse2.vue",
        code: `<LoaderPulse2 />`
    },
    {
        name: "loader-pulse3",
        path: "components/loader/LoaderPulse3.vue",
        code: `<LoaderPulse3 />`
    },
    {
        name: "loader-pulse-multiple",
        path: "components/loader/LoaderPulseMultiple.vue",
        code: `<LoaderPulseMultiple />`
    },
    {
        name: "loader-pulse-ring",
        path: "components/loader/LoaderPulseRing.vue",
        code: `<LoaderPulseRing />`
    },
    {
        name: "loader-pulse-rings2",
        path: "components/loader/LoaderPulseRings2.vue",
        code: `<LoaderPulseRings2 />`
    },
    {
        name: "loader-pulse-rings3",
        path: "components/loader/LoaderPulseRings3.vue",
        code: `<LoaderPulseRings3 />`
    },
    {
        name: "loader-pulse-rings-multiple",
        path: "components/loader/LoaderPulseRingsMultiple.vue",
        code: `<LoaderPulseRingsMultiple />`
    },
    {
        name: "loader-ring-resize",
        path: "components/loader/LoaderRingResize.vue",
        code: `<LoaderRingResize />`
    },
    {
        name: "loader-tadpole",
        path: "components/loader/LoaderTadpole.vue",
        code: `<LoaderTadpole />`
    },
    {
        name: "loader-wifi",
        path: "components/loader/LoaderWifi.vue",
        code: `<LoaderWifi />`
    },
    {
        name: "loader-wifi-fade",
        path: "components/loader/LoaderWifiFade.vue",
        code: `<LoaderWifiFade />`
    },
    {
        name: "loader-wind-toy",
        path: "components/loader/LoaderWindToy.vue",
        code: `<LoaderWindToy />`
    },
]

export default Loaders;