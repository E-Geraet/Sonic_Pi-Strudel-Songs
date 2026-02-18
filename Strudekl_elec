
setCpm(132/4);


register('acidenv', (x, pat) => pat.lpf(100)
         .lpenv(x * 9).lps(0.1).lpd(0.1).lpq(2));

$: s("[wt_comp:2,supersaw!16]")
  .wt(.3).wtenv(.3).unison(2)
.dec(.16).diode("4:.4")
  .fm(time.mod("<1 _ _ 2>"))
  .note("<f1 e1 c1 d1>")
  
  .acidenv(slider(0.52)).o(3)._scope()

//$: s("bd!4").bank("RolandTR909").duck("3:4").duckdepth(.8).o(2)._scope()
  
  .acidenv(1)
  .gain(1.3)



$: s("white!16").dec(tri.fast(4).mul(.22)).o(6).lpf(900)._scope()




$: note("a3|g3|e3|f3").s("sawtooth").hpf(900)._scope()



$: s("ch sd ch sd").bank("RolandTR909").duck("3:4").duckdepth(.8).o(2).punchcard()
