const { createClient } = supabase;
require('dotenv').config();

supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const addUser = async () => {
  email = document.userInfo.email.value;
  name = document.userInfo.name.value;
  service = document.userInfo.service.value;
  console.log(email);
  console.log(name);
  console.log(service);

  if (!name) return alert('이름을 입력해주세요');
  if (!email) return alert('이메일을 입력해주세요');
  if (!service) return alert('서비스를 입력해주세요');

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
  console.log(result);
};
