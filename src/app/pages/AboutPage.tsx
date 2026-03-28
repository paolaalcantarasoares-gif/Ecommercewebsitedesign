import { Shield, Award, Truck, Users } from 'lucide-react';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { strings } from '../constants/strings';

const s = strings.about;

const valueIcons = [Shield, Award, Truck, Users];

interface TeamMember {
  id: number;
  nome: string;
  cargo: string;
  url_foto: string;
}

interface StorePhoto {
  id: number;
  descricao: string;
  url_foto: string;
}

export function AboutPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [storePhotos, setStorePhotos] = useState<StorePhoto[]>([]);

  useEffect(() => {
    supabase.from('equipe').select('*').then(({ data }) => {
      if (data) setTeam(data);
    });
    supabase.from('fotos_loja').select('*').then(({ data }) => {
      if (data) setStorePhotos(data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Hero */}
      <section className="relative py-24 bg-black border-b border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-[#dc2626] text-xs font-bold uppercase tracking-widest mb-4">{s.tag}</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic leading-tight">
            {s.heroTitle}<br />
            <span className="text-[#dc2626]">{s.heroTitleHighlight}</span>
          </h1>
          <p className="mt-6 text-gray-400 max-w-xl text-lg">{s.heroDesc}</p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 border-b border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black uppercase mb-6">{s.historyTitle}</h2>
            <p className="text-gray-400 leading-relaxed mb-4">{s.historyP1}</p>
            <p className="text-gray-400 leading-relaxed mb-6">{s.historyP2}</p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>{s.address}</p>
              <p>{s.phone}</p>
              <p>{s.hours}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {s.stats.map(({ value, label }) => (
              <div key={label} className="bg-[#111] border border-[#1a1a1a] rounded p-6 text-center">
                <p className="text-4xl font-black text-[#dc2626]">{value}</p>
                <p className="text-gray-400 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Loja */}
      <section className="py-20 border-b border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-black uppercase mb-12">{s.storeTitle}</h2>
          {storePhotos.length === 0 ? (
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map(n => (
                <div key={n} className="bg-[#111] border border-[#1a1a1a] rounded aspect-video animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-4">
              {storePhotos.map(photo => (
                <div key={photo.id} className="relative overflow-hidden rounded aspect-video bg-[#111]">
                  <img
                    src={photo.url_foto}
                    alt={photo.descricao}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {photo.descricao && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                      <p className="text-sm text-white">{photo.descricao}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 border-b border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-black uppercase mb-12">{s.teamTitle}</h2>
          {team.length === 0 ? (
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="bg-[#111] border border-[#1a1a1a] rounded p-4 animate-pulse">
                  <div className="w-24 h-24 rounded-full bg-[#1a1a1a] mx-auto mb-4" />
                  <div className="h-4 bg-[#1a1a1a] rounded mb-2" />
                  <div className="h-3 bg-[#1a1a1a] rounded w-2/3 mx-auto" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-4 gap-6">
              {team.map(member => (
                <div key={member.id} className="bg-[#111] border border-[#1a1a1a] rounded p-4 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-[#1a1a1a]">
                    <img
                      src={member.url_foto}
                      alt={member.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-white">{member.nome}</p>
                  <p className="text-[#dc2626] text-sm mt-1">{member.cargo}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 border-b border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-black uppercase mb-12 text-center">{s.valuesTitle}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {s.values.map(({ title, desc }, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={title} className="bg-[#111] border border-[#1a1a1a] rounded p-6">
                  <Icon className="w-8 h-8 text-[#dc2626] mb-4" />
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-black uppercase mb-4">{s.ctaTitle}</h2>
          <p className="text-gray-400 mb-8">{s.ctaDesc}</p>
          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-[#dc2626] hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded transition-colors"
          >
            {s.ctaButton}
          </Link>
        </div>
      </section>

    </div>
  );
}
