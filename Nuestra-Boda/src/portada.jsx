import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Countdown from "./componentes-encabezado/encabeza-cuenta";


export default function Portada() {
  const audioRef = useRef(null);

  const [introActiva, setIntroActiva] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [abrirSobre, setAbrirSobre] = useState(false);

   const [invitados, setInvitados] = useState("Invitado");
   const [pases, setPases] = useState(1);

   useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const nombre = params.get("nombre");
  const cantidad = params.get("pases");

  if (nombre) setInvitados(nombre);
  if (cantidad) setPases(parseInt(cantidad));
}, []);

  const iniciarExperiencia = () => {
    setAbrirSobre(true);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play();
      }

      setIntroActiva(false);
      setMostrarContenido(true);
    }, 1800);
  };

  return (
    <div className="relative w-full overflow-hidden bg-white text-[#1a1a1a]">

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
      </audio>

      {/* INTRO */}
      <AnimatePresence>
        {introActiva && (
          
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center text-center px-6 z-50 bg-white pt-24"
            exit={{ opacity: 0 }}
          >

            {/* TEXTOS */}
            <p className="tracking-[0.4em] text-lg mb-4 text-black-400">
              NUESTRA BODA
            </p>

            <h1 className="text-3xl md:text-5xl font-cursiveDancing mb-2">
              María & Jonathan
            </h1>

            <p className="mb-10 text-black-400">
              11 • Junio • 2026
            </p>

            {/* SOBRE */}
            <div
              onClick={iniciarExperiencia}
              className="relative w-80 h-56 cursor-pointer"
              style={{ perspective: 1400 }}
            >
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-12 bg-black/10 blur-2xl rounded-full" />

              <div
                className="absolute inset-0 rounded-md shadow-[0_25px_60px_rgba(0,0,0,0.25)] border"
                style={{
                  background: "linear-gradient(135deg, #6b705c, #5a614f 40%, #4a4f40 100%)",
                  borderColor: "#7a8068",
                }}
              />

              <div className="absolute inset-[6px] rounded-sm border border-white/10" />

              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,#ffffff,transparent_60%)] mix-blend-overlay" />

              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 origin-top"
                style={{
                  clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                  background: "linear-gradient(to bottom, #7a8068, #5a614f)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                }}
                animate={abrirSobre ? { rotateX: -180 } : { rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* SELLO */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={abrirSobre ? { scale: 0.7, opacity: 0, y: -10 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-black/30 blur-xl scale-110" />
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, #f5e6b0, #d4af37 40%, #9c7a1c 70%, #5f4a00 100%)",
                      boxShadow: `
                        inset 0 4px 8px rgba(255,255,255,0.6),
                        inset 0 -10px 18px rgba(0,0,0,0.6),
                        0 12px 25px rgba(0,0,0,0.35)
                      `,
                    }}
                  />
                  <div className="absolute inset-2 rounded-full border border-black/40" />
                  <div
                    className="relative z-10 text-[28px] font-serif"
                    style={{
                      color: "#6e5500",
                      textShadow: `
                        1px 1px 0 rgba(255,255,255,0.4),
                        -1px -1px 0 rgba(0,0,0,0.6),
                        0 2px 3px rgba(0,0,0,0.4)
                      `,
                    }}
                  >
                    M
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-start justify-center pt-6"
                animate={abrirSobre ? { opacity: 0 } : { opacity: 1 }}
              >
                <p className="text-white/80 tracking-[0.3em] text-xs">
                  ABRIR
                </p>
              </motion.div>
            </div>

              <p className="mt-10 text-sm tracking-widest text-black-400">
              HEMOS RESERVADO
             </p>

            <p className="text-2xl text-black-400">
           {pases}
           </p>

           <p className="text-sm text-black-400">
           LUGARES EN SU HONOR
           </p>
 
           <p className="mt-4 text-sm text-gray-500">
          Invitado: {invitados}
         </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENIDO */}
      <div className="relative w-full">
        <motion.img
          src="/prueba-03.jpg"
          alt="portada"
          className="w-full h-auto object-contain"
          initial={{ opacity: 0 }}
          animate={mostrarContenido ? { opacity: 1 } : { opacity: 0 }}
        />

        <motion.div
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={mostrarContenido ? { opacity: 1 } : { opacity: 0 }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white"
          initial={{ opacity: 0 }}
          animate={mostrarContenido ? { opacity: 1 } : { opacity: 0 }}
        >
          <h1 className="text-4xl md:text-7xl font-cursiveDancing">
            Valeria & Alejandro
          </h1>

          <Countdown targetDate="2026-06-11T00:00:00" />
        </motion.div>
      </div>
    </div>
  );
}