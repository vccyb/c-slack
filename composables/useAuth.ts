import { useSupabase } from "@/utils/supabase";

export function useAuth() {
  // 在 setup 函数中初始化 Supabase 客户端
  const supabase = useSupabase();

  /**
   * 使用 Github 登录
   */
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) console.error("GitHub sign in error:", error);
    return { data, error };
  };

  /**
   * 使用 Google 登录
   */
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) console.error("Google sign in error:", error);
    return { data, error };
  };

  /**
   * 使用邮箱和密码注册
   */
  const signUpWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    if (!email || !password) {
      console.error("Email and password are required");
      return;
    }

    email = email.trim();
    password = password.trim();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) console.error("Sign up error:", error);
    return { data, error };
  };

  /**
   * 使用邮箱和密码登录
   */
  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) console.error("Sign in error:", error);
    return { data, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Sign out error:", error);

    // 清除本地存储
    localStorage.removeItem("supabase.auth.token");

    // 清除所有相关的 Cookie
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // 验证登出是否成功
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session === null) {
      console.log("Sign out successful");
    } else {
      console.log("Sign out may have failed");
    }
  };

  const getSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session;
  };

  return {
    signInWithGithub,
    signInWithGoogle,
    signUpWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getSession,
  };
}
