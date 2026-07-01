const LOGIN_PAGE = `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <meta name="theme-color" content="#f6f7f2">
  <title>Gambit - Dang nhap</title>
  <style>
    *{box-sizing:border-box}body{margin:0;min-height:100svh;display:grid;place-items:center;padding:24px;background:#f6f7f2;color:#171914;font-family:Inter,system-ui,sans-serif}
    main{width:min(100%,380px)}.mark{width:52px;height:52px;display:grid;place-items:center;margin-bottom:28px;background:#171914;color:#fff;border-radius:8px;font:700 25px Georgia,serif}
    h1{margin:0 0 8px;font:600 34px Georgia,serif;letter-spacing:0}p{margin:0 0 28px;color:#65695f;line-height:1.5}
    label{display:block;margin-bottom:8px;font-size:13px;font-weight:700}input{width:100%;height:52px;padding:0 15px;border:1px solid #cfd2c9;border-radius:7px;background:#fff;font:inherit;outline:none}
    input:focus{border-color:#171914;box-shadow:0 0 0 3px #17191416}button{width:100%;height:52px;margin-top:12px;border:0;border-radius:7px;background:#171914;color:#fff;font:700 15px inherit;cursor:pointer}
    button:disabled{opacity:.6}.error{min-height:22px;margin:12px 0 0;color:#b42318;font-size:14px}
  </style>
</head>
<body>
  <main>
    <div class="mark">G</div>
    <h1>Gambit</h1>
    <p>Khong gian rieng cua ban. Dang nhap mot lan, thiet bi nay se duoc ghi nho trong 1 nam.</p>
    <form id="form">
      <label for="password">Mat khau</label>
      <input id="password" name="password" type="password" autocomplete="current-password" autofocus required>
      <button id="submit" type="submit">Dang nhap</button>
      <div class="error" id="error" role="alert"></div>
    </form>
  </main>
  <script>
    const form=document.getElementById("form"),button=document.getElementById("submit"),error=document.getElementById("error");
    form.addEventListener("submit",async(event)=>{
      event.preventDefault();button.disabled=true;error.textContent="";
      try{
        const response=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:form.password.value})});
        if(!response.ok){error.textContent=response.status===401?"Mat khau khong dung.":"Khong the dang nhap luc nay.";return}
        const next=new URLSearchParams(location.search).get("next");
        location.replace(next&&next.startsWith("/")&&!next.startsWith("//")?next:"/");
      }catch{error.textContent="Khong the ket noi. Thu lai sau."}
      finally{button.disabled=false}
    });
  </script>
</body>
</html>`;

export function onRequest({ request }) {
  if (request.method !== "GET") {
    return new Response("Method not allowed.", { status: 405 });
  }

  return new Response(LOGIN_PAGE, {
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/html; charset=utf-8",
      "X-Frame-Options": "DENY",
    },
  });
}
