import { ChapterHeader, ChapterSection, Figure, Reveal } from "../components/Narrative";
import { DetailTrigger } from "../components/Dialog";
import type { DetailId } from "../content/details";
import type { PhotoKey } from "../content/media";

const milestones: Array<{ id: DetailId; when: string; label: string }> = [
  { id: "fut-partida", when: "3 nov. 2019", label: "A partida em Verona" },
  { id: "fut-chute", when: "9' do 2º tempo", label: "O chute e a ameaça" },
  { id: "fut-protocolo", when: "Paralisação", label: "Protocolo antirracismo" },
  { id: "fut-gol", when: "85'", label: "O gol e o placar" },
  { id: "fut-punicoes", when: "Dias depois", label: "Punições" },
  { id: "fut-reacoes", when: "Repercussão", label: "Reações e debate" },
];

function CaseCard({
  id,
  photo,
  date,
  place,
  title,
  text,
}: {
  id: DetailId;
  photo: PhotoKey;
  date: string;
  place: string;
  title: string;
  text: string;
}) {
  return (
    <article>
      <Figure photo={photo} aspect="aspect-[4/5]" reveal="mask" />
      <Reveal variant="up" beat className="mt-8">
        <p className="kicker">
          {date} · {place}
        </p>
        <h3 className="font-display mt-3 text-[clamp(2.2rem,3.4vw,3.4rem)] leading-[1.05] text-cream">{title}</h3>
        <p className="mt-5 max-w-[46ch] text-[1.2rem] leading-[1.6] text-cream-dim">{text}</p>
        <div className="mt-7">
          <DetailTrigger id={id}>Ler o caso</DetailTrigger>
        </div>
      </Reveal>
    </article>
  );
}

/** Capítulo 05: estudo de caso aprofundado (Balotelli), linha do tempo interativa e outros casos documentados. */
export function Capitulo05() {
  return (
    <ChapterSection id="cap-05" index={4} className="bg-[#13120f]">
      <ChapterHeader
        id="cap-05"
        number="05"
        kicker="Racismo no futebol"
        title="O talento não deveria ter cor."
        lead="Três casos documentados, com aprofundamento no caso de Mario Balotelli. O racismo também acontece dentro das quatro linhas."
      />

      <div className="mx-auto mt-24 grid max-w-[1480px] gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Figure photo="balotelli" aspect="aspect-[4/5]" reveal="mask" />
        </div>
        <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7">
          <Reveal variant="lateral" beat>
            <p className="kicker">Estudo de caso principal</p>
            <h3 className="font-display mt-4 text-[clamp(2.4rem,4vw,4rem)] leading-[1.04] text-cream">Mario Balotelli</h3>
          </Reveal>
          <Reveal variant="mask" beat dur={0.9}>
            <p className="font-display text-[clamp(2.8rem,5.6vw,6rem)] leading-[0.95] text-terracotta">
              3 de novembro de 2019
            </p>
          </Reveal>
          <Reveal variant="fade" beat>
            <p className="text-[1.25rem] leading-snug text-cream-dim">
              Stadio Marcantonio Bentegodi · Verona, Itália · Série A
            </p>
          </Reveal>
          <Reveal variant="up" beat>
            <p className="kicker">Contexto</p>
            <p className="mt-3 text-[1.22rem] leading-[1.65] text-cream">
              O Brescia visitava o Hellas Verona. Balotelli, atacante do Brescia e da seleção italiana, denunciou
              cânticos racistas vindos de um setor da torcida da casa.
            </p>
          </Reveal>
          <Reveal variant="lateral" beat>
            <p className="kicker">Acontecimento</p>
            <p className="mt-3 text-[1.22rem] leading-[1.65] text-cream">
              Aos 9 minutos do segundo tempo, ele chutou a bola na direção desse setor e caminhou para trás do gol,
              ameaçando deixar o campo. Companheiros e adversários o convenceram a continuar.
            </p>
          </Reveal>
          <Reveal variant="up" beat>
            <p className="kicker">Interrupção</p>
            <p className="mt-3 text-[1.22rem] leading-[1.65] text-cream">
              O árbitro Maurizio Mariani parou o jogo. Um aviso no alto-falante ameaçou suspender a partida caso os
              cânticos continuassem. A bola voltou a rolar após cerca de quatro minutos.
            </p>
          </Reveal>
          <Reveal variant="up" beat>
            <p className="kicker">Reação</p>
            <p className="mt-3 text-[1.22rem] leading-[1.65] text-cream">
              Nas redes, Balotelli publicou vídeos dos cânticos e escreveu 'Vergonha de vocês' (tradução livre). O
              treinador do Verona afirmou que não houve racismo, posição criticada pelo Brescia.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-[1480px]">
        <Reveal variant="fade" beat>
          <p className="kicker">Linha do tempo do caso · clique para aprofundar</p>
        </Reveal>
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {milestones.map((milestone, i) => (
            <li key={milestone.id}>
              <Reveal variant="up" delay={i * 0.05} beat>
                <DetailTrigger
                  id={milestone.id}
                  className="flex w-full justify-between gap-4 border border-cream/15 p-6 hover:border-amber"
                >
                  <span className="flex flex-col gap-2">
                    <span className="kicker">{milestone.when}</span>
                    <span className="font-display text-[1.6rem] leading-tight text-cream">{milestone.label}</span>
                  </span>
                </DetailTrigger>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <div className="mx-auto mt-36 max-w-[1480px]">
        <Reveal variant="fade" beat>
          <p className="kicker">Arquivo visual · Mario Balotelli</p>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Figure photo="balotelli_euro" aspect="aspect-[4/3]" reveal="photo" />
          <Figure photo="balotelli_euro_action" aspect="aspect-[4/3]" reveal="mask" />
          <Reveal variant="up" beat className="flex flex-col justify-between border border-cream/15 bg-surface p-7">
            <div>
              <p className="kicker">Vídeo · 1min52</p>
              <h3 className="font-display mt-4 text-[clamp(2rem,3vw,3rem)] leading-tight text-cream">
                O que aconteceu em Verona?
              </h3>
              <p className="mt-5 text-[1.1rem] leading-[1.6] text-cream-dim">
                Reportagem do <em>The Guardian</em> sobre a interrupção da partida, a reação dos jogadores e o
                protocolo antirracismo.
              </p>
            </div>
            <a
              href="https://www.theguardian.com/football/video/2019/nov/04/mario-balotelli-convinced-to-stay-on-pitch-after-racist-abuse-at-verona-video"
              target="_blank"
              rel="noreferrer"
              className="detail-trigger mt-8"
            >
              Assistir reportagem
            </a>
            <p className="mt-4 text-[0.9rem] leading-snug text-cream-dim">Requer internet · fonte externa</p>
          </Reveal>
        </div>
      </div>

      <Reveal variant="mask" beat dur={0.9} className="mx-auto mt-40 max-w-[1100px] border-l-2 border-terracotta pl-8">
        <p className="font-display text-[clamp(2rem,3.8vw,3.8rem)] leading-[1.12] text-cream">
          O gol ficou no placar. A pergunta ficou no ar: por que cabe ao jogador negro interromper a partida para que
          o racismo seja levado a sério?
        </p>
      </Reveal>

      <div className="mx-auto mt-40 max-w-[1480px]">
        <Reveal variant="fade" beat>
          <p className="kicker">Outros casos documentados</p>
        </Reveal>
        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-12">
          <CaseCard
            id="fut-vinicius"
            photo="vinicius"
            date="21 de maio de 2023"
            place="Valência, Espanha"
            title="Vinícius Júnior"
            text="O jogo foi interrompido após insultos racistas da torcida. Três pessoas foram detidas, o clube foi multado e a federação anulou o cartão vermelho recebido pelo jogador."
          />
          <CaseCard
            id="fut-richarlison"
            photo="richarlison"
            date="27 de setembro de 2022"
            place="Paris, França"
            title="Richarlison"
            text="Uma banana foi atirada contra ele ao comemorar um gol pela seleção brasileira. A CBF repudiou o ato e a Fifa anunciou investigação."
          />
        </div>
      </div>
    </ChapterSection>
  );
}
