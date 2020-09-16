package com.scholat.doma.global;

import java.util.Random;

public class RandomID {


    final static Integer length = 6;

    /**
     * 随机生成ID（个人ID和团队ID）
     * @param style 类型，分别可选user类型和team类型
     * @return ID字符串，分别可能以user/team/erro开头
     */
    public String GetRandomId(String style) {
        String originStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new Random();
        StringBuffer stringBuffer = new StringBuffer();
        if(style.equals("users")){
            stringBuffer.append("user");
        }else if(style.equals("team")){
            stringBuffer.append("team");
        }else{
            stringBuffer.append("erro"); //错误前缀
        }
        for (int i = 0; i < length;++i) {
            int index = random.nextInt(originStr.length());
            char charAt = originStr.charAt(index);
            stringBuffer.append(charAt);
        }
        return stringBuffer.toString();
    }
}
