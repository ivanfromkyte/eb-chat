function getBrowserLang() {
  if (navigator.languages) return navigator.languages[0] || 'pt-BR'
  if (navigator.language) return navigator.language || 'pt-BR'
  return 'pt-BR'
}
function convertBrowserLang(iso) {
  if (iso.startsWith('pt')) return 'pt'
  if (iso.startsWith('es')) return 'es'
  return 'en'
}
const translations = {
  en: {
  },
  pt: {
    greetingTitle: 'Assistente Kyte',
    baseMessage: 'Olá Se precisar é só chamar 👋',
    Check: 'user name',
    previousChat: 'Conversas anteriores',
    noChat: 'Sem conversas anteriores',
    newChat: 'Nova conversa',
    startChat: 'Iniciar conversa',
    formTitle: 'Nos conte sobre sua dúvida, comentário ou problema.',
    name: 'Meu nome',
    email: 'Endereço de email',
    issue: 'Preciso de ajuda com...',
    message: 'Sua mensagem: quanto mais detalhado e direto ao ponto, melhor e mais rápido poderemos te ajudar',
  },
  es: {
    greetingTitle: 'Asistente Kyte',
    baseMessage: '¡Hola! Si lo necesitas solo llama 👋',
    Check: 'user name',
    previousChat: 'Conversaciones anteriores',
    noChat: 'Sin conversaciones previas',
    newChat: 'Nueva conversación',
    startChat: 'Iniciar conversación',
    formTitle: 'Cuéntanos tu duda, comentario o problema.',
    name: 'Mi nombre',
    email: 'Correo electrónico',
    issue: 'Necesito ayuda con...',
    message: 'Tu mensaje: cuanto más detallado y directo, mejor y más rápido podremos ayudarte',
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const isoLang = getBrowserLang();
  const useLang = convertBrowserLang(isoLang.toLocaleLowerCase());
  const values = translations[useLang];

  if (values['greetingTitle'] !== undefined)
    document.getElementsByClassName('chat__prompt-message-copy')[0].textContent = values['greetingTitle'];
  if (values['baseMessage'] !== undefined)
    document.getElementsByClassName('chat__prompt-base-helper')[0].textContent = values['baseMessage'];
  if (values['Check'] !== undefined)
    document.getElementsByClassName('chat__prompt-input')[0].textContent = values['Check'];
  if (values['newChat'] !== undefined)
    document.getElementsByClassName('chat__all-btn')[0].textContent = values['newChat'];
  if (values['noChat'] !== undefined)
    document.getElementsByClassName('chat__all-messages-track')[0].textContent = values['noChat'];
  if (values['formTitle'] !== undefined)
    document.getElementsByClassName('chat__all-messages-track')[0].textContent = values['formTitle'];
  if (values['startChat'] !== undefined)
    document.getElementsByClassName('chat__messages-btn')[0].textContent = values['startChat'];
  if (values['name'] !== undefined)
    document.getElementsByName('name')[0].textContent = values['name'];
  if (values['email'] !== undefined)
    document.getElementsByName('email')[0].textContent = values['email'];
  if (values['issue'] !== undefined)
    document.getElementsByName('Issue')[0].textContent = values['issue'];
  if (values['message'] !== undefined)
    document.getElementsByName('message')[0].textContent = values['message'];
});
