import {
  UserPlusIcon,
  ListChecksIcon,
  RefreshIcon,
  SearchIcon,
  ChartIcon,
  ShieldIcon,
} from "@/components/site/feature-icons";

const steps = [
  {
    icon: <UserPlusIcon />,
    title: "1. Cria a tua conta",
    description:
      "Regista-te com nome, email e password em menos de um minuto — a password fica sempre encriptada. Preferes ainda mais rapido? Entra diretamente com a tua conta Google ou GitHub, sem preencher formularios. Nao precisas de cartao de credito nem de confirmar nada por email para comecares a usar a app.",
  },
  {
    icon: <ListChecksIcon />,
    title: "2. Cria as tuas tarefas",
    description:
      "Para cada tarefa defines um titulo, uma descricao opcional com mais detalhe, uma prioridade (Low, Medium ou High) e, se quiseres, um prazo. Tudo fica guardado na tua conta e so tu consegues ver ou editar as tuas proprias tarefas — nunca as de outra pessoa.",
  },
  {
    icon: <RefreshIcon />,
    title: "3. Move as tarefas entre estados",
    description:
      "Cada tarefa passa por tres estados: To Do (por fazer), In Progress (em curso) e Done (concluida). Basta escolher o novo estado numa lista pendente junto a tarefa — a mudanca fica gravada de imediato, sem teres de recarregar a pagina, e quando marcas uma tarefa como concluida a data de conclusao fica registada automaticamente.",
  },
  {
    icon: <SearchIcon />,
    title: "4. Encontra tudo em segundos",
    description:
      "Com dezenas de tarefas, procurar uma a olho torna-se impossivel. Por isso tens uma caixa de pesquisa que procura no titulo e na descricao, e filtros independentes por estado e por prioridade — podes combinar os tres ao mesmo tempo para chegares exatamente ao que precisas.",
  },
  {
    icon: <ChartIcon />,
    title: "5. Acompanha tudo no dashboard",
    description:
      "Assim que entras, o dashboard mostra-te de imediato: quantas tarefas tens no total, quantas estao em cada estado (To Do / In Progress / Done) e quantas estao atrasadas (prazo ja passou e ainda nao estao concluidas). E tambem lista as tuas 5 tarefas mais recentes, para retomares o trabalho sem teres de ir a lista completa.",
  },
  {
    icon: <ShieldIcon />,
    title: "6. Controlas sempre a tua conta",
    description:
      "Em Definicoes podes ver os dados da tua conta e, se um dia quiseres, apagar a conta por completo — a acao pede confirmacao explicita e remove permanentemente a tua conta e todas as tuas tarefas. Tambem podes alternar entre modo claro e escuro a qualquer momento; a preferencia fica guardada no teu browser.",
  },
];

const features = [
  {
    icon: <UserPlusIcon />,
    title: "Autenticacao flexivel",
    description: "Email+password, Google ou GitHub — escolhes tu.",
  },
  {
    icon: <ListChecksIcon />,
    title: "CRUD completo",
    description: "Cria, edita e apaga tarefas sem limites.",
  },
  {
    icon: <ChartIcon />,
    title: "Dashboard em tempo real",
    description: "Estatisticas atualizadas a cada visita.",
  },
  {
    icon: <SearchIcon />,
    title: "Pesquisa e filtros",
    description: "Por texto, estado e prioridade, combinaveis.",
  },
  {
    icon: <RefreshIcon />,
    title: "Fluxo de estados simples",
    description: "To Do, In Progress e Done, com um clique.",
  },
  {
    icon: <ShieldIcon />,
    title: "Privacidade e controlo",
    description: "Os teus dados sao so teus, e podes apaga-los quando quiseres.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Como funciona
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Da conta a primeira tarefa organizada, passo a passo.
        </p>
      </div>

      <div className="mt-16 space-y-10">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-start sm:gap-6 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              {step.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {step.title}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Tudo o que tens a tua disposicao
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 p-5 dark:border-gray-800"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                {feature.icon}
              </div>
              <h3 className="mt-3 font-semibold text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
