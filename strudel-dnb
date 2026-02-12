samples('github:yaxu/clean-breaks')
samples('github:tidalcycles/dirt-samples')

setcps(1.25)


let mix = 1; 

stack(
  // TRACK 1
  stack(
    sound("groove").loopAt(2).chop(8).iter(8).crush("8 5 6 8").color("magenta").punchcard()
      .every(4, x => x.fast("2").jux(slow(2)))
      .when("<[[1 0 1] [0 2]] 1>", x => x.delay(0.1))
      .every(2, x => x.mask("0 1")),
    
    sound("amen").loopAt(8).crush("5 8").every(2, x => x.chop(8).iter(4))
      .stack(sound("cp").late(1/8).gain(0.4).crush("5").slow(2))
      .gain("<0 1>"),

    n("[0, -2 -4, <[4 8] 4>]").slow(8)
      .scale("<E:mixolydian!2 C:mixolydian!3 G:mixolydian>").sound("supersaw").lpf(2000)
  )
  .gain(1 - mix) 
  .lpf(mix > 0.5 ? 800 : 20000), 

  // TRACK 2
  stack(
    s("bd").late("<0.01 .251>").color("orange")._scope(),
    s("breaks165:1/2").fit() 
      .degradeBy(0.05).chop(4)
      .sometimesBy(.4, ply("2")).sometimesBy(.1, ply("4"))
      .release(.01).gain(1.2).cut(1),
    n("0 1 2 3").s("laz_parts").slow(60).cut(2).gain(0.8)
  )
  .reset("<x@30 [x*[8 [8 [16 32]]]]@2>".late(2))
  .gain(mix) 
)
