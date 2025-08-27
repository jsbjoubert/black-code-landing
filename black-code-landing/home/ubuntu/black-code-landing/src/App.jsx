import { Button } from '@/components/ui/button.jsx'
import { CheckCircle } from 'lucide-react'
import './App.css'

function App() {
  const ctaLink = "https://pay.kiwify.com.br/AaKf9Vr?afid=RoHJBYpy"

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          🚨 VOCÊ NASCEU PRA TRABALHAR 40 ANOS PRA ENRIQUECER O PATRÃO?
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
          <strong>Chega de vender seu tempo por um salário que evapora antes do fim do mês.</strong><br />
          Está na hora de sair da prisão da CLT e construir sua liberdade com a internet.
        </p>
        <Button 
          className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          onClick={() => window.open(ctaLink, '_blank')}
        >
          QUERO MINHA LIBERDADE AGORA
        </Button>
      </section>

      {/* Método Section */}
      <section className="px-4 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-400">
            🔥 O Método BLACK CODE vai te levar do Cartão de Ponto ao Wi-Fi
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Um passo a passo direto que já ajudou trabalhadores comuns a criar sua primeira renda online – mesmo sem experiência.
          </p>
          
          <div className="text-left max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">O que você vai levar:</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={24} />
                <span className="text-lg"><strong>Método simples e validado</strong> – qualquer pessoa pode aplicar</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={24} />
                <span className="text-lg"><strong>Comece com 1h por dia</strong> – sem precisar investir alto</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={24} />
                <span className="text-lg"><strong>Acesso imediato + suporte guiado</strong> – você nunca fica perdido</span>
              </div>
            </div>
          </div>

          <Button 
            className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(ctaLink, '_blank')}
          >
             QUERO MINHA LIBERDADE AGORA
          </Button>
        </div>
      </section>

      {/* Problema CLT Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-red-400">
            📉 A vida CLT é um ciclo sem saída
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
            <div className="bg-gray-900 p-6 rounded-lg">
              <ul className="space-y-3 text-lg">
                <li>• Bate ponto todo dia</li>
                <li>• Engole chefe e pressão</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <ul className="space-y-3 text-lg">
                <li>• Trabalha 30 anos e se aposenta com 1 salário mínimo</li>
                <li>• Vive sem tempo pra família e sem dinheiro pra curtir a vida</li>
              </ul>
            </div>
          </div>

          <p className="text-2xl font-bold mb-8 text-yellow-400">
            VOCÊ MERCE MAIS DO QUE ISSO.
          </p>

          <Button 
            className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(ctaLink, '_blank')}
          >
            QUERO COMEÇAR AGORA
          </Button>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="px-4 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-400">
            👥 Gente real, resultados reais
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <p className="text-lg mb-2"><strong>João, auxiliar de escritório:</strong></p>
              <p>largou o extra no fim de semana e hoje fatura ALTO no digital.</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <p className="text-lg mb-2"><strong>Carla, atendente de mercado:</strong></p>
              <p>cansada da escala, ganhou em 30 dias o equivalente a 3 meses do seu antigo salário.</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <p className="text-lg mb-2"><strong>Marcos, CLT há 12 anos:</strong></p>
              <p>primeira venda online em menos de 15 dias.</p>
            </div>
          </div>

          <p className="text-2xl font-bold text-yellow-400">
            Não é papo de coach. É vida real.
          </p>
        </div>
      </section>

      {/* Preço Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-400">
            💰 Investimento simbólico
          </h2>
          
          <p className="text-xl mb-8 text-gray-300">
            O acesso completo ao MÉTODO é menos que um almoço fora.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🔒</span>
                <span className="text-lg font-bold">Garantia 7 dias:</span>
              </div>
              <p>se não gostar, pede reembolso sem burocracia</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">📲</span>
                <span className="text-lg font-bold">Acesso imediato:</span>
              </div>
              <p>comece ainda hoje</p>
            </div>
          </div>

          <Button 
            className="bg-green-500 hover:bg-green-600 text-black font-bold text-xl px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => window.open(ctaLink, '_blank')}
          >
             QUERO MINHA LIBERDADE AGORA
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-yellow-400">
            ❓ Perguntas Frequentes (FAQ)
          </h2>
          
          <div className="space-y-6">
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Preciso ter experiência?</h3>
              <p className="text-lg">Não. O método foi feito para iniciantes.</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Preciso investir muito?</h3>
              <p className="text-lg">Não. Você pode começar com ferramentas gratuitas ou baratas.</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Funciona mesmo sem tempo?</h3>
              <p className="text-lg">Sim. Com 1h por dia você já coloca em prática.</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-2 text-yellow-400">Em quanto tempo vejo resultados?</h3>
              <p className="text-lg">Depende do esforço, mas muitos alunos têm resultados nos primeiros 30 dias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Última Chamada Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-red-400">
            🚀 Última chamada
          </h2>
          
          <p className="text-2xl mb-8 text-gray-300">
            <strong>Você pode continuar preso ao crachá ou dar o primeiro passo pra sua LIBERDADE.</strong>
          </p>

          <Button 
            className="bg-green-500 hover:bg-green-600 text-black font-bold text-xl px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
            onClick={() => window.open(ctaLink, '_blank')}
          >
            Quero sair da CLT e viver do Wi-Fi
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 text-center text-gray-500">
        <p>&copy; 2024 Método BLACK CODE. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App

