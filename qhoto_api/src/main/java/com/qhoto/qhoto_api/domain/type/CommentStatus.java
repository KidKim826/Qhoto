package com.qhoto.qhoto_api.domain.type;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CommentStatus implements LegacyCommonType {
    USING("사용중","U" ), DISABLE("삭제","D");

    private final String desc;
    private final String legacyCode;



}
