package com.scholat.doma.entity;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TeamMember {

    private String teamId;
    private String teamName;
    private String userName;
    private String userId;


}