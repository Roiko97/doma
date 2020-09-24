package com.scholat.doma.dao;

import com.scholat.doma.entity.TeamMember;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamMemberDao {
    public Integer Add(TeamMember teamMember);
    public Integer DeleteByUserId(String userId);
    public Integer DeleteByTeamId(String teamId);
    public Integer Update(TeamMember teamMember);
    public List<TeamMember> SelectAll();
    public List<TeamMember> SelectByUserId(String userId);
    public List<TeamMember> SelectByTeamId(String TeamId);
}
