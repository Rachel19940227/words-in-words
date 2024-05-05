package com.words.words.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.words.words.entity.words;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;


public interface WORDSMapper extends BaseMapper<words> {
        @Select("select * from words where word = #{inputWord}")
        words selectByWord(@Param("inputWord") String inputWord);

        @Select("SELECT COUNT(*) FROM words WHERE word = #{inputWord}")
        int countByWord(@Param("inputWord") String inputWord);

}