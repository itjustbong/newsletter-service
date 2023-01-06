// import { SUPABASE_URL, SUPABASE_KEY } from '../env.js';
const { createClient } = supabase;

supabase = createClient(
  SUPABASE_URL || process.env.SUPABASE_URL,
  SUPABASE_KEY || process.env.SUPABASE_KEY
);

const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const addUser = async function () {
  const data = new FormData(document.userInfo);
  const name = data.get('name');
  const email = data.get('email');
  const service = data.get('service');

  if (!name) return alert('이름을 입력해주세요');
  if (!email) return alert('이메일을 입력해주세요');
  if (!service) return alert('서비스를 입력해주세요');
  if (!validateEmail(email)) return alert('이메일을 유효성을 확인해주세요');

  const result = await supabase.from('newsletter').insert([
    {
      service: service,
      user: { name, email },
    },
  ]);
  if (result.error) {
    console.log(error);
    return;
  }
  alert('뉴스레터 등록에 성공하였습니다.');
  location.reload();
};

export { addUser };
