setcpm(134/4)
setGainCurve(x => Math.pow(x, 2))
const LAID = 0.012
const SUB = 36

const K = {
  pad: 'gm_pad_halo',
  glocke: 'gm_xylophone',
  kick: 'RolandTR808_bd',
  rim: 'RolandTR808_rim',
  hat: 'RolandTR808_hh',
  openHat: 'RolandTR808_oh',
  bass: 'sub808',
  lead: 'gm_lead_2_sawtooth',
  chor: 'gm_electric_bass_finger',
}

$akkorde: note("<[bb3,db4,f4,ab4,c5] [gb3,bb3,db4,f4] [db4,f4,ab4,c5] [ab3,c4,eb4,bb4]>").slow(2)
  .s(K.pad).attack(0.3).release(2).room(0.7).gain(0.4)

$glocken: note(`<
  [f5 ~ ~ db5 ~ ~ c5 ~] ~
  [db5 ~ ~ bb4 ~ ~ ~ ~] [~ ~ f5 ~ ~ ~ ~ ~]
  [c5 ~ ~ ab4 ~ ~ f4 ~] ~
  [eb5 ~ ~ c5 ~ ~ bb4 ~] [~ ~ ~ ~ ab4 ~ ~ ~]
>`)
  .s(K.glocke).release(1.5).room(0.7)
  .delay(0.3).delaytime(0.448).delayfeedback(0.35).gain(0.35)

$kick: s(K.kick).struct(`<
  [x ~ ~ ~ ~ ~ x ~ x ~ ~ ~ ~ ~ x ~]
  [x ~ ~ ~ ~ ~ x ~ x ~ ~ ~ ~ ~ x ~]
  [x ~ ~ ~ ~ ~ x ~ x ~ ~ ~ ~ ~ x ~]
  [x ~ ~ ~ ~ ~ x ~ x ~ ~ ~ x ~ x ~]
>`)
  .lpf(500).gain(0.6)

$rim: s(K.rim).struct(`<
  [x ~ ~ ~ ~ ~ x ~ ~ ~ ~ ~ x ~ ~ ~]
  [~ ~ ~ ~ x ~ ~ ~ x ~ ~ ~ ~ ~ ~ ~]
>`)
  .late(LAID).room(0.4).gain(0.5)

$hat: s(K.hat).struct(`<
  [x ~ x x x x x x]
  [x x x x x x ~ ~]
  [x x x x ~ x x ~]
  [x x x x x x ~ ~]
>`)
  .late(LAID).lpf(6500).gain("0.55 0.4 0.55 0.4 0.55 0.4 0.55 0.4")

$hatRoll: s(K.hat).struct("<~ [~ ~ ~ [x x x x x x]] ~ [~ ~ ~ [x x x x x x x x]]>")
  .late(LAID).lpf(6500)
  .gain("<~ [~ ~ ~ [0.3 0.3 0.35 0.4 0.45 0.5]] ~ [~ ~ ~ [0.25 0.3 0.35 0.4 0.45 0.5 0.55 0.6]]>")

$openHat: s(K.openHat).struct("<~ ~ [~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ x ~] ~>")
  .late(LAID).lpf(6500).gain(0.35)

$bass808: note("<0 -4 3 -2>".add(SUB)).slow(2).struct(`<
  [x ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~]
  [x ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~]
  [x ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~]
  [x ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ x ~ ~ ~]
>`)
  .s(K.bass).cut(1).gain(0.45).release(1.5).room(1.6)

$lead: note(`<
  ~!4
  ~ [~ ~ c5 _ ab4 _ ~ c5 _ ~ f5 _ ~ c5 _ ~]
  ~ [~ ~ eb5 _ c5 _ ~ eb5 _ ~ ab5 _ ~ eb5 _ ~]
  [~ ~ ~ ab5 _ ~ ~ ~ ~ f5 _ ~ ~ ~ ~ ~] [~ ~ f5 _ db5 _ ~ f5 _ ~ ab5 _ ~ f5 _ ~]
  [~ ~ ~ f5 _ ~ ~ ~ ~ db5 _ ~ ~ ~ ~ ~] [~ ~ db5 _ bb4 _ ~ db5 _ ~ f5 _ ~ db5 _ ~]
  [~ ~ ~ f5 _ ~ ~ ~ ~ c5 _ ~ ~ ~ ~ ~] [~ ~ c5 _ ab4 _ ~ c5 _ ~ f5 _ ~ c5 _ ~]
  [~ ~ ~ ab5 _ ~ ~ ~ ~ eb5 _ ~ ~ ~ ~ ~] [~ ~ eb5 _ c5 _ ~ bb4 _ ~ ab4 _ ~ ~ ~ ~]
>`)
  .s(K.lead).lpf(3200).attack(0.005).release(2.3).room(0.6)
  .delay(0.35).delaytime(0.336).delayfeedback(0.4).gain(0.15).sustain(1.9)

$leadOkt: note(`<
  ~!13
  [~ ~ c6 _ ab5 _ ~ c6 _ ~ f6 _ ~ c6 _ ~]
  ~
  [~ ~ eb6 _ c6 _ ~ bb5 _ ~ ab5 _ ~ ~ ~ ~]
>`)
  .s(K.lead).lpf(3200).attack(0.005).release(0.3).room(0.5)
  .delay(0.35).delaytime(0.336).delayfeedback(0.4).gain(0.2)

$chor: note("<[db5,f5,ab5] [db5,f5,bb5] [c5,f5,ab5] [c5,eb5,ab5]>").slow(2)
  .s(K.chor).attack(0.6).release(2).room(0.8).gain(0.2)
  .mask("<0!8 1!8>")
