package com.qhoto.qhoto_api.domain;

import com.qhoto.qhoto_api.domain.type.QuestStatus;
import com.qhoto.qhoto_api.domain.type.converter.QuestStatusConverter;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

import static javax.persistence.EnumType.*;
import static javax.persistence.FetchType.*;
import static javax.persistence.GenerationType.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class ActiveDaily {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "active_daily_id")
    private Long id;

    @Column(name = "daily_quest_date",nullable = false)
    private LocalDate date;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "quest_id", nullable = false)
    private Quest quest;

    @Column(name = "daily_quest_status",nullable = false)
    @Convert(converter = QuestStatusConverter.class)
    private QuestStatus status;



}
