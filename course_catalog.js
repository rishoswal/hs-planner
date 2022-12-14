let school_districts_collection =
    [
        {
            "school_district_id": "101",
            "school_district_name": "Lake Washington"
        },
        {
            "school_district_id": "102",
            "school_district_name": "Issaquah"
        },
        {
            "school_district_id": "103",
            "school_district_name": "Riverview"
        },
        {
            "school_district_id": "104",
            "school_district_name": "Skykomish"
        },
        {
            "school_district_id": "105",
            "school_district_name": "Snoqualmie Valley"
        },
        {
            "school_district_id": "106",
            "school_district_name": "Northshore"
        },
        {
            "school_district_id": "107",
            "school_district_name": "Monroe"
        },
        {
            "school_district_id": "108",
            "school_district_name": "Snohomish"
        },
        {
            "school_district_id": "109",
            "school_district_name": "Lake Stevens"
        },
        {
            "school_district_id": "110",
            "school_district_name": "Arlington"
        },
        {
            "school_district_id": "111",
            "school_district_name": "Granite Falls"
        },
    ];

let course_collection =
    [
        {
            "school_id": "1011",
            "school_name": "Redmond High School",
            "school_district_id": "101",
            "class9":
            {
                "english":
                    [
                        {   
                            "name": "English 9", 
                            "sem1_course_id": "eng121", 
                            "sem2_course_id": "eng122",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "english"
                        },
                        {   
                            "name": "Honors English 9", 
                            "sem1_course_id": "eng171", 
                            "sem2_course_id": "eng172",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "english"
                        },
                        {   
                            "name": "Speech & Debate", 
                            "sem1_course_id": "eng661", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "35",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "english"
                        }
                    ],
                "social_studies":
                    [
                        {   
                            "name": "World History", 
                            "sem1_course_id": "soc121", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "soc1"
                        },
                        {   
                            "name": "Honors World History", 
                            "sem1_course_id": "soc171", 
                            "sem2_course_id": "soc172",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "soc1"
                        }
                    ],
                "mathematics":
                    [
                        {   
                            "name": "Algebra 1", 
                            "sem1_course_id": "mat241", 
                            "sem2_course_id": "mat242",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Geometry", 
                            "sem1_course_id": "mat321", 
                            "sem2_course_id": "mat322",
                            "pre_req_all": "mat241",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Algebra 2", 
                            "sem1_course_id": "mat261", 
                            "sem2_course_id": "mat262",
                            "pre_req_all": "mat241, mat321",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Honors Algebra 2", 
                            "sem1_course_id": "mat271", 
                            "sem2_course_id": "mat272",
                            "pre_req_all": "mat241, mat321",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Precalculus", 
                            "sem1_course_id": "mat611", 
                            "sem2_course_id": "mat612",
                            "pre_req_all": "",
                            "pre_req_any": "mat261, mat271",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Honors Precalculus", 
                            "sem1_course_id": "mat615", 
                            "sem2_course_id": "mat616",
                            "pre_req_all": "mat271",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        }
                    ],
                "science":
                    [
                        {
                            "name": "Biology", 
                            "sem1_course_id": "sci231", 
                            "sem2_course_id": "sci232",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "Honors Biology", 
                            "sem1_course_id": "sci271", 
                            "sem2_course_id": "sci272",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        }
                    ],
                "cte_bm":
                    [
                        {   
                            "name": "Business & Marketing", 
                            "sem1_course_id": "CDX401", 
                            "sem2_course_id": "CDX402",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Sports & Entertainment Marketing", 
                            "sem1_course_id": "cdx413", 
                            "sem2_course_id": "cdx414",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Leadership 1", 
                            "sem1_course_id": "cvx151", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        }
                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [
                        {   
                            "name": "Family Health", 
                            "sem1_course_id": "cdh511", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "health"
                        },
                        {   
                            "name": "American Sign Language 1", 
                            "sem1_course_id": "cdl011", 
                            "sem2_course_id": "cdl012",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "world_lang"
                        },
                        {   
                            "name": "Child Development 1", 
                            "sem1_course_id": "cdx501", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Culinary Arts 1", 
                            "sem1_course_id": "cvc731", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "cte_tech_science":
                    [
                        {
                            "name": "Community Emergency Response", 
                            "sem1_course_id": "cvx211", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        }
                    ],
                "cte_tech_art":
                    [
                        {
                            "name": "Video Production 1", 
                            "sem1_course_id": "cda201", 
                            "sem2_course_id": "cda202",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Graphic Design", 
                            "sem1_course_id": "cda361", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Technical Theater", 
                            "sem1_course_id": "cda511", 
                            "sem2_course_id": "cda512",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Art and Design", 
                            "sem1_course_id": "cva321", 
                            "sem2_course_id": "cva322",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Industrial Design - 3D Printing", 
                            "sem1_course_id": "cva371", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Photography 1", 
                            "sem1_course_id": "cva411", 
                            "sem2_course_id": "cva412",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "cte_stem":
                    [
                        {
                            "name": "Intro to Engineering", 
                            "sem1_course_id": "cdm801", 
                            "sem2_course_id": "cdm802",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "health_pe":
                    [
                        {
                            "name": "Lifetime Wellness", 
                            "sem1_course_id": "hea511", 
                            "sem2_course_id": "ped112",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "health"
                        },
                        {
                            "name": "Physical Education 1", 
                            "sem1_course_id": "ped111", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Walking & Wellness 1", 
                            "sem1_course_id": "ped526", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        }
                    ],
                "visual_perf_arts":
                    [
                        {
                            "name": "Art 1", 
                            "sem1_course_id": "art011", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Honors Art 1", 
                            "sem1_course_id": "art016", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        }
                    ],
                "world_lang":
                    [
                        {
                            "name": "American Sign Lang 1", 
                            "sem1_course_id": "cdl011", 
                            "sem2_course_id": "cdl012",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "French 1", 
                            "sem1_course_id": "for111", 
                            "sem2_course_id": "for112",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Japanese 1", 
                            "sem1_course_id": "for311", 
                            "sem2_course_id": "for312",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 1", 
                            "sem1_course_id": "for511", 
                            "sem2_course_id": "for512",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 2", 
                            "sem1_course_id": "for521", 
                            "sem2_course_id": "for522",
                            "pre_req_all": "for511",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "",
                            "ap_course": "",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        }
                    ]
            },

            "class10":
            {
                "english":
                    [
                        {   
                            "name": "English 10", 
                            "sem1_course_id": "eng221", 
                            "sem2_course_id": "eng222",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "english"
                        },
                        {   
                            "name": "Honors English 10", 
                            "sem1_course_id": "eng271", 
                            "sem2_course_id": "eng272",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "english"
                        },
                        {   
                            "name": "Creative Writing", 
                            "sem1_course_id": "eng611", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "Playwriting", 
                            "sem1_course_id": "eng621", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "Speech & Debate", 
                            "sem1_course_id": "eng661", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "35",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        }
                    ],
                "social_studies":
                    [
                        {   
                            "name": "Contemporary World Problems", 
                            "sem1_course_id": "soc221", 
                            "sem2_course_id": "soc222",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "soc2"
                        },
                        {   
                            "name": "AP World History", 
                            "sem1_course_id": "soc281", 
                            "sem2_course_id": "soc282",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "soc2"
                        },
                        {   
                            "name": "Introduction to Philosophy", 
                            "sem1_course_id": "soc675", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "International Relations", 
                            "sem1_course_id": "soc711", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "History through Film", 
                            "sem1_course_id": "soc903", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        }
                    ],
                "mathematics":
                    [
                        {   
                            "name": "Algebra 1", 
                            "sem1_course_id": "mat241", 
                            "sem2_course_id": "mat242",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Geometry", 
                            "sem1_course_id": "mat321", 
                            "sem2_course_id": "mat322",
                            "pre_req_all": "mat241",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Algebra 2", 
                            "sem1_course_id": "mat261", 
                            "sem2_course_id": "mat262",
                            "pre_req_all": "mat241, mat321",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Honors Algebra 2", 
                            "sem1_course_id": "mat271", 
                            "sem2_course_id": "mat272",
                            "pre_req_all": "mat241, mat321",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Precalculus", 
                            "sem1_course_id": "mat611", 
                            "sem2_course_id": "mat612",
                            "pre_req_all": "",
                            "pre_req_any": "mat261, mat271",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Honors Precalculus", 
                            "sem1_course_id": "mat615", 
                            "sem2_course_id": "mat616",
                            "pre_req_all": "mat271",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Calculus", 
                            "sem1_course_id": "mat621", 
                            "sem2_course_id": "mat622",
                            "pre_req_all": "",
                            "pre_req_any": "mat611, mat615",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "AP Calculus AB", 
                            "sem1_course_id": "mat631", 
                            "sem2_course_id": "mat632",
                            "pre_req_all": "",
                            "pre_req_any": "mat615, mat621",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "AP Calculus BC", 
                            "sem1_course_id": "mat641", 
                            "sem2_course_id": "mat642",
                            "pre_req_all": "mat631",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        }
                    ],
                "science":
                    [
                        {
                            "name": "Chemistry", 
                            "sem1_course_id": "sci321", 
                            "sem2_course_id": "sci322",
                            "pre_req_all": "",
                            "pre_req_any": "mat611, mat615",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "Physics", 
                            "sem1_course_id": "sci421", 
                            "sem2_course_id": "sci422",
                            "pre_req_all": "",
                            "pre_req_any": "mat611, mat615",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "Physics in the Universe", 
                            "sem1_course_id": "sci431", 
                            "sem2_course_id": "sci432",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "AP Biology", 
                            "sem1_course_id": "sci281", 
                            "sem2_course_id": "sci282",
                            "pre_req_all": "",
                            "pre_req_any": "sci231, sci271",
                            "recommended_pre_req": "sci321",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "AP Chemistry", 
                            "sem1_course_id": "sci381", 
                            "sem2_course_id": "sci382",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "mat261, sci321",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "AP Environmental Science", 
                            "sem1_course_id": "sci541", 
                            "sem2_course_id": "sci542",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "mat241",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "Oceanography", 
                            "sem1_course_id": "sci517", 
                            "sem2_course_id": "sci518",
                            "pre_req_all": "",
                            "pre_req_any": "sci231, sci271",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "Marine Science 1", 
                            "sem1_course_id": "sci611", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "Astronomy", 
                            "sem1_course_id": "sci701", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "STEM Health Science", 
                            "sem1_course_id": "sci291", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        }
                    ],
                "cte_bm":
                    [
                        {   
                            "name": "Business & Marketing", 
                            "sem1_course_id": "cdx401", 
                            "sem2_course_id": "cdx402",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Sports & Entertainment Marketing", 
                            "sem1_course_id": "cdx413", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Retail Operations", 
                            "sem1_course_id": "cdx421", 
                            "sem2_course_id": "cdx422",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Personal Finance", 
                            "sem1_course_id": "cdx651", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "AP Microeconomics", 
                            "sem1_course_id": "cvs351", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "AP Macroeconomics", 
                            "sem1_course_id": "cvs353", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Leadership 1", 
                            "sem1_course_id": "cvx151", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Leadership 2", 
                            "sem1_course_id": "cvx153", 
                            "sem2_course_id": "cvx154",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        }
                    ],
                "cte_it":
                    [
                        {   
                            "name": "AP Computer Science A", 
                            "sem1_course_id": "cdm911", 
                            "sem2_course_id": "cdm912",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Microsoft Office Specialist", 
                            "sem1_course_id": "cdx301", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        }
                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [
                        {   
                            "name": "Food Science A", 
                            "sem1_course_id": "cdc721", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Family Health", 
                            "sem1_course_id": "cdh511", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "American Sign Language 1", 
                            "sem1_course_id": "cdl011", 
                            "sem2_course_id": "cdl012",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "American Sign Language 2", 
                            "sem1_course_id": "cdl021", 
                            "sem2_course_id": "cdl022",
                            "pre_req_all": "cdl011",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Child Development 1", 
                            "sem1_course_id": "cdx501", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Culinary Arts 1", 
                            "sem1_course_id": "cvc731", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Psychology", 
                            "sem1_course_id": "cvs551", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "cte_tech_science":
                    [
                        {
                            "name": "Forensic Science", 
                            "sem1_course_id": "cdc821", 
                            "sem2_course_id": "cdc822",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Community Emergency Response", 
                            "sem1_course_id": "cvx211", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        }
                    ],
                "cte_tech_art":
                    [
                        {
                            "name": "Yearbook 1", 
                            "sem1_course_id": "cda151", 
                            "sem2_course_id": "cda152",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Video Production 1", 
                            "sem1_course_id": "cda201", 
                            "sem2_course_id": "cda202",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Video Production 2", 
                            "sem1_course_id": "cda203", 
                            "sem2_course_id": "cda204",
                            "pre_req_all": "cda201",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Graphic Design", 
                            "sem1_course_id": "cda361", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Technical Theater", 
                            "sem1_course_id": "cda511", 
                            "sem2_course_id": "cda512",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Art and Design", 
                            "sem1_course_id": "cva321", 
                            "sem2_course_id": "cva322",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Commercial Art", 
                            "sem1_course_id": "cva331", 
                            "sem2_course_id": "cva332",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "AP Art and Design", 
                            "sem1_course_id": "cva341", 
                            "sem2_course_id": "cva342",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Industrial Design - 3D Printing", 
                            "sem1_course_id": "cva371", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Photography 1", 
                            "sem1_course_id": "cva411", 
                            "sem2_course_id": "cva412",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Photography 2", 
                            "sem1_course_id": "cva413", 
                            "sem2_course_id": "cva414",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "cte_stem":
                    [
                        {
                            "name": "Intro to Engineering", 
                            "sem1_course_id": "cdm801", 
                            "sem2_course_id": "cdm802",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Principles of Engineering", 
                            "sem1_course_id": "cdm803", 
                            "sem2_course_id": "cdm804",
                            "pre_req_all": "cdm801",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Aerospace Engineering", 
                            "sem1_course_id": "cdm807", 
                            "sem2_course_id": "",
                            "pre_req_all": "cdm801",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "health_pe":
                    [
                        {
                            "name": "Physical Education 1", 
                            "sem1_course_id": "ped111", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Physical Education 2", 
                            "sem1_course_id": "ped111", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Team Sports", 
                            "sem1_course_id": "ped411", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Racquet & Net Sports", 
                            "sem1_course_id": "ped421", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Lifetime Sports", 
                            "sem1_course_id": "ped441", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Walking & Wellness 1", 
                            "sem1_course_id": "ped526", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Strength Training 1", 
                            "sem1_course_id": "ped551", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Strength Training 2", 
                            "sem1_course_id": "ped561", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Womens Strength Training", 
                            "sem1_course_id": "ped553", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        }
                    ],
                "visual_perf_arts":
                    [
                        {
                            "name": "Art 1", 
                            "sem1_course_id": "art011", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Honors Art 1", 
                            "sem1_course_id": "art016", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Art 2", 
                            "sem1_course_id": "art241", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "art011, art016",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Honors Art 2", 
                            "sem1_course_id": "art243", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "art011, art016",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        }
                    ],
                "world_lang":
                    [
                        {
                            "name": "American Sign Lang 1", 
                            "sem1_course_id": "cdl011", 
                            "sem2_course_id": "cdl012",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "American Sign Lang 2", 
                            "sem1_course_id": "cdl021", 
                            "sem2_course_id": "cdl022",
                            "pre_req_all": "cdl011",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "French 1", 
                            "sem1_course_id": "for111", 
                            "sem2_course_id": "for112",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "French 2", 
                            "sem1_course_id": "for121", 
                            "sem2_course_id": "for122",
                            "pre_req_all": "for111",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Japanese 1", 
                            "sem1_course_id": "for311", 
                            "sem2_course_id": "for312",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Japanese 2", 
                            "sem1_course_id": "for321", 
                            "sem2_course_id": "for322",
                            "pre_req_all": "for311",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 1", 
                            "sem1_course_id": "for511", 
                            "sem2_course_id": "for512",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 2", 
                            "sem1_course_id": "for521", 
                            "sem2_course_id": "for522",
                            "pre_req_all": "for511",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "",
                            "ap_course": "",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 3", 
                            "sem1_course_id": "for531", 
                            "sem2_course_id": "for532",
                            "pre_req_all": "",
                            "pre_req_any": "for521",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "",
                            "ap_course": "",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        }
                    ]
            },
            
            "class11":
            {
                "english":
                    [
                        {   
                            "name": "English 11", 
                            "sem1_course_id": "eng321", 
                            "sem2_course_id": "eng322",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "english"
                        },
                        {   
                            "name": "AP English Language & Comp.", 
                            "sem1_course_id": "eng491", 
                            "sem2_course_id": "eng492",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "english"
                        },
                        {   
                            "name": "AP English Literature & Comp.", 
                            "sem1_course_id": "eng495", 
                            "sem2_course_id": "eng496",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "english"
                        },
                        {   
                            "name": "Film Analysis", 
                            "sem1_course_id": "eng521", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "25",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "Creative Writing", 
                            "sem1_course_id": "eng611", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "Playwriting", 
                            "sem1_course_id": "eng621", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "Speech & Debate", 
                            "sem1_course_id": "eng661", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "35",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        }
                    ],
                "social_studies":
                    [
                        {   
                            "name": "U.S. Social Studies", 
                            "sem1_course_id": "soc321", 
                            "sem2_course_id": "soc322",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "soc3"
                        },
                        {   
                            "name": "AP U.S. History", 
                            "sem1_course_id": "soc381", 
                            "sem2_course_id": "soc382",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "soc3"
                        },
                        {   
                            "name": "Introduction to Philosophy", 
                            "sem1_course_id": "soc675", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "International Relations", 
                            "sem1_course_id": "soc711", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "History through Film", 
                            "sem1_course_id": "soc903", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        }
                    ],
                "mathematics":
                    [
                        {   
                            "name": "Algebra 1", 
                            "sem1_course_id": "mat241", 
                            "sem2_course_id": "mat242",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Geometry", 
                            "sem1_course_id": "mat321", 
                            "sem2_course_id": "mat322",
                            "pre_req_all": "mat241",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Algebra 2", 
                            "sem1_course_id": "mat261", 
                            "sem2_course_id": "mat262",
                            "pre_req_all": "mat241, mat321",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Honors Algebra 2", 
                            "sem1_course_id": "mat271", 
                            "sem2_course_id": "mat272",
                            "pre_req_all": "mat241, mat321",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Precalculus", 
                            "sem1_course_id": "mat611", 
                            "sem2_course_id": "mat612",
                            "pre_req_all": "",
                            "pre_req_any": "mat261, mat271",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Honors Precalculus", 
                            "sem1_course_id": "mat615", 
                            "sem2_course_id": "mat616",
                            "pre_req_all": "mat271",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Calculus", 
                            "sem1_course_id": "mat621", 
                            "sem2_course_id": "mat622",
                            "pre_req_all": "",
                            "pre_req_any": "mat611, mat615",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "AP Calculus AB", 
                            "sem1_course_id": "mat631", 
                            "sem2_course_id": "mat632",
                            "pre_req_all": "",
                            "pre_req_any": "mat615, mat621",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "AP Calculus BC", 
                            "sem1_course_id": "mat641", 
                            "sem2_course_id": "mat642",
                            "pre_req_all": "",
                            "pre_req_any": "mat631",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Statistics", 
                            "sem1_course_id": "mat503", 
                            "sem2_course_id": "mat504",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "AP Statistics", 
                            "sem1_course_id": "cvm301", 
                            "sem2_course_id": "cvm302",
                            "pre_req_all": "",
                            "pre_req_any": "mat261, mat271",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        }
                    ],
                "science":
                    [
                        {
                            "name": "Chemistry", 
                            "sem1_course_id": "sci321", 
                            "sem2_course_id": "sci322",
                            "pre_req_all": "",
                            "pre_req_any": "mat611, mat615",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "Chem. in the Earth System", 
                            "sem1_course_id": "sci331", 
                            "sem2_course_id": "sci332",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "Physics", 
                            "sem1_course_id": "sci421", 
                            "sem2_course_id": "sci422",
                            "pre_req_all": "",
                            "pre_req_any": "mat611, mat615",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "AP Biology", 
                            "sem1_course_id": "sci281", 
                            "sem2_course_id": "sci282",
                            "pre_req_all": "",
                            "pre_req_any": "sci231, sci271",
                            "recommended_pre_req": "sci321",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "AP Chemistry", 
                            "sem1_course_id": "sci381", 
                            "sem2_course_id": "sci382",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "mat261, sci321",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "AP Environmental Science", 
                            "sem1_course_id": "sci541", 
                            "sem2_course_id": "sci542",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "mat241",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "AP Physics C", 
                            "sem1_course_id": "sci485", 
                            "sem2_course_id": "sci486",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "mat621",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "Oceanography", 
                            "sem1_course_id": "sci517", 
                            "sem2_course_id": "sci518",
                            "pre_req_all": "",
                            "pre_req_any": "sci231, sci271",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "Marine Science 1", 
                            "sem1_course_id": "sci611", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "Astronomy", 
                            "sem1_course_id": "sci701", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "STEM Health Science", 
                            "sem1_course_id": "sci291", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        }
                    ],
                "cte_bm":
                    [
                        {   
                            "name": "Business & Marketing", 
                            "sem1_course_id": "cdx401", 
                            "sem2_course_id": "cdx402",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Sports & Entertainment Marketing", 
                            "sem1_course_id": "cdx413", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Retail Operations", 
                            "sem1_course_id": "cdx421", 
                            "sem2_course_id": "cdx422",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Personal Finance", 
                            "sem1_course_id": "cdx651", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "AP Statistics", 
                            "sem1_course_id": "cvm301", 
                            "sem2_course_id": "cvm302",
                            "pre_req_all": "",
                            "pre_req_any": "mat261, mat271",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "AP Microeconomics", 
                            "sem1_course_id": "cvs351", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "AP Macroeconomics", 
                            "sem1_course_id": "cvs353", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Leadership 1", 
                            "sem1_course_id": "cvx151", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Leadership 2", 
                            "sem1_course_id": "cvx153", 
                            "sem2_course_id": "cvx154",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Finance and Wealth Management", 
                            "sem1_course_id": "cvx657", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        }
                    ],
                "cte_it":
                    [
                        {   
                            "name": "AP Computer Science A", 
                            "sem1_course_id": "cdm911", 
                            "sem2_course_id": "cdm912",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Microsoft Office Specialist", 
                            "sem1_course_id": "cdx301", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Video Game Design", 
                            "sem1_course_id": "cdx905", 
                            "sem2_course_id": "cdx906",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        }
                    ],
                "cte_health":
                    [
                        {   
                            "name": "Biotechnology", 
                            "sem1_course_id": "cdc121", 
                            "sem2_course_id": "cdc122",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Anatomy & Physiology", 
                            "sem1_course_id": "cdc561", 
                            "sem2_course_id": "cdc562",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "cte_human":
                    [
                        {   
                            "name": "Food Science A", 
                            "sem1_course_id": "cdc721", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Family Health", 
                            "sem1_course_id": "cdh511", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "American Sign Language 1", 
                            "sem1_course_id": "cdl011", 
                            "sem2_course_id": "cdl012",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "American Sign Language 2", 
                            "sem1_course_id": "cdl021", 
                            "sem2_course_id": "cdl022",
                            "pre_req_all": "cdl011",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "American Sign Language 3", 
                            "sem1_course_id": "cdl031", 
                            "sem2_course_id": "cdl032",
                            "pre_req_all": "cdl021",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Teacher Education Academy 1", 
                            "sem1_course_id": "cdx221", 
                            "sem2_course_id": "cdx222",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Teacher Education Academy 2", 
                            "sem1_course_id": "cdx223", 
                            "sem2_course_id": "cdx224",
                            "pre_req_all": "cdx221",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Child Development 1", 
                            "sem1_course_id": "cdx501", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Culinary Arts 1", 
                            "sem1_course_id": "cvc731", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Psychology", 
                            "sem1_course_id": "cvs551", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "AP Psychology", 
                            "sem1_course_id": "cvs561", 
                            "sem2_course_id": "cvs562",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "cte_tech_science":
                    [
                        {
                            "name": "Forensic Science", 
                            "sem1_course_id": "cdc821", 
                            "sem2_course_id": "cdc822",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Community Emergency Response", 
                            "sem1_course_id": "cvx211", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        }
                    ],
                "cte_tech_art":
                    [
                        {
                            "name": "Yearbook 1", 
                            "sem1_course_id": "cda151", 
                            "sem2_course_id": "cda152",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Video Production 1", 
                            "sem1_course_id": "cda201", 
                            "sem2_course_id": "cda202",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Video Production 2", 
                            "sem1_course_id": "cda203", 
                            "sem2_course_id": "cda204",
                            "pre_req_all": "cda201",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Graphic Design", 
                            "sem1_course_id": "cda361", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Technical Theater", 
                            "sem1_course_id": "cda511", 
                            "sem2_course_id": "cda512",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Art and Design", 
                            "sem1_course_id": "cva321", 
                            "sem2_course_id": "cva322",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Commercial Art", 
                            "sem1_course_id": "cva331", 
                            "sem2_course_id": "cva332",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "AP Art and Design", 
                            "sem1_course_id": "cva341", 
                            "sem2_course_id": "cva342",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Industrial Design - 3D Printing", 
                            "sem1_course_id": "cva371", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Photography 1", 
                            "sem1_course_id": "cva411", 
                            "sem2_course_id": "cva412",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Photography 2", 
                            "sem1_course_id": "cva413", 
                            "sem2_course_id": "cva414",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "cte_stem":
                    [
                        {
                            "name": "Intro to Engineering", 
                            "sem1_course_id": "cdm801", 
                            "sem2_course_id": "cdm802",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Principles of Engineering", 
                            "sem1_course_id": "cdm803", 
                            "sem2_course_id": "cdm804",
                            "pre_req_all": "cdm801",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Engineering Design and Development", 
                            "sem1_course_id": "cdm809", 
                            "sem2_course_id": "",
                            "pre_req_all": "cdm803",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Aerospace Engineering", 
                            "sem1_course_id": "cdm807", 
                            "sem2_course_id": "",
                            "pre_req_all": "cdm801",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "health_pe":
                    [
                        {
                            "name": "Physical Education 2", 
                            "sem1_course_id": "ped111", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Competitive PE", 
                            "sem1_course_id": "ped217", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Water Aquatics", 
                            "sem1_course_id": "ped311", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "ped111, hea511",
                            "grade_req": "11",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Team Sports", 
                            "sem1_course_id": "ped411", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Racquet & Net Sports", 
                            "sem1_course_id": "ped421", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Lifetime Sports", 
                            "sem1_course_id": "ped441", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Walking & Wellness 1", 
                            "sem1_course_id": "ped526", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Strength Training 1", 
                            "sem1_course_id": "ped551", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Strength Training 2", 
                            "sem1_course_id": "ped561", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Womens Strength Training", 
                            "sem1_course_id": "ped553", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        }
                    ],
                "visual_perf_arts":
                    [
                        {
                            "name": "Art 1", 
                            "sem1_course_id": "art011", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Honors Art 1", 
                            "sem1_course_id": "art016", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Art 2", 
                            "sem1_course_id": "art241", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "art011, art016",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Honors Art 2", 
                            "sem1_course_id": "art243", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "art011, art016",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Art 3", 
                            "sem1_course_id": "art251", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "art011, art016",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Ceramics 1", 
                            "sem1_course_id": "art611", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "art011, art016",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        }
                    ],
                "world_lang":
                    [
                        {
                            "name": "American Sign Lang 1", 
                            "sem1_course_id": "cdl011", 
                            "sem2_course_id": "cdl012",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "American Sign Lang 2", 
                            "sem1_course_id": "cdl021", 
                            "sem2_course_id": "cdl022",
                            "pre_req_all": "cdl011",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "American Sign Lang 3", 
                            "sem1_course_id": "cdl031", 
                            "sem2_course_id": "cdl032",
                            "pre_req_all": "cdl021",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "French 1", 
                            "sem1_course_id": "for111", 
                            "sem2_course_id": "for112",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "French 2", 
                            "sem1_course_id": "for121", 
                            "sem2_course_id": "for122",
                            "pre_req_all": "for111",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "French 3", 
                            "sem1_course_id": "for131", 
                            "sem2_course_id": "for132",
                            "pre_req_all": "for121",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Japanese 1", 
                            "sem1_course_id": "for311", 
                            "sem2_course_id": "for312",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Japanese 2", 
                            "sem1_course_id": "for321", 
                            "sem2_course_id": "for322",
                            "pre_req_all": "for311",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Japanese 3", 
                            "sem1_course_id": "for331", 
                            "sem2_course_id": "for332",
                            "pre_req_all": "for321",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 1", 
                            "sem1_course_id": "for511", 
                            "sem2_course_id": "for512",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 2", 
                            "sem1_course_id": "for521", 
                            "sem2_course_id": "for522",
                            "pre_req_all": "for511",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "",
                            "ap_course": "",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 3", 
                            "sem1_course_id": "for531", 
                            "sem2_course_id": "for532",
                            "pre_req_all": "",
                            "pre_req_any": "for521",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "",
                            "ap_course": "",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 4", 
                            "sem1_course_id": "for541", 
                            "sem2_course_id": "for542",
                            "pre_req_all": "",
                            "pre_req_any": "for531",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "",
                            "ap_course": "",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "AP Spanish", 
                            "sem1_course_id": "for571", 
                            "sem2_course_id": "for572",
                            "pre_req_all": "",
                            "pre_req_any": "for531",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        }
                    ]
            },

            "class12":
            {
                "english":
                    [
                        {   
                            "name": "English 12", 
                            "sem1_course_id": "eng421", 
                            "sem2_course_id": "eng422",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "12",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "english"
                        },
                        {   
                            "name": "Honors English 12", 
                            "sem1_course_id": "eng471", 
                            "sem2_course_id": "eng472",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "12",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "english"
                        },
                        {   
                            "name": "AP English Language & Comp.", 
                            "sem1_course_id": "eng491", 
                            "sem2_course_id": "eng492",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "english"
                        },
                        {   
                            "name": "AP English Literature & Comp.", 
                            "sem1_course_id": "eng495", 
                            "sem2_course_id": "eng496",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "english"
                        },
                        {   
                            "name": "Film Analysis", 
                            "sem1_course_id": "eng521", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "25",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "Creative Writing", 
                            "sem1_course_id": "eng611", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "Playwriting", 
                            "sem1_course_id": "eng621", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "Speech & Debate", 
                            "sem1_course_id": "eng661", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "35",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        }
                    ],
                "social_studies":
                    [
                        {   
                            "name": "Civics", 
                            "sem1_course_id": "soc521", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "12",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "soc4"
                        },
                        {   
                            "name": "AP U.S. Govt.", 
                            "sem1_course_id": "soc481", 
                            "sem2_course_id": "soc482",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "12",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "soc4"
                        },
                        {   
                            "name": "Introduction to Philosophy", 
                            "sem1_course_id": "soc675", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "International Relations", 
                            "sem1_course_id": "soc711", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        },
                        {   
                            "name": "History through Film", 
                            "sem1_course_id": "soc903", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "credit_category": "elective"
                        }
                    ],
                "mathematics":
                    [
                        {   
                            "name": "Algebra 1", 
                            "sem1_course_id": "mat241", 
                            "sem2_course_id": "mat242",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Geometry", 
                            "sem1_course_id": "mat321", 
                            "sem2_course_id": "mat322",
                            "pre_req_all": "mat241",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Algebra 2", 
                            "sem1_course_id": "mat261", 
                            "sem2_course_id": "mat262",
                            "pre_req_all": "mat241, mat321",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Honors Algebra 2", 
                            "sem1_course_id": "mat271", 
                            "sem2_course_id": "mat272",
                            "pre_req_all": "mat241, mat321",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Precalculus", 
                            "sem1_course_id": "mat611", 
                            "sem2_course_id": "mat612",
                            "pre_req_all": "",
                            "pre_req_any": "mat261, mat271",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Honors Precalculus", 
                            "sem1_course_id": "mat615", 
                            "sem2_course_id": "mat616",
                            "pre_req_all": "mat271",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Calculus", 
                            "sem1_course_id": "mat621", 
                            "sem2_course_id": "mat622",
                            "pre_req_all": "",
                            "pre_req_any": "mat611, mat615",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "AP Calculus AB", 
                            "sem1_course_id": "mat631", 
                            "sem2_course_id": "mat632",
                            "pre_req_all": "",
                            "pre_req_any": "mat615, mat621",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "AP Calculus BC", 
                            "sem1_course_id": "mat641", 
                            "sem2_course_id": "mat642",
                            "pre_req_all": "",
                            "pre_req_any": "mat631",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "Statistics", 
                            "sem1_course_id": "mat503", 
                            "sem2_course_id": "mat504",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        },
                        {   
                            "name": "AP Statistics", 
                            "sem1_course_id": "cvm301", 
                            "sem2_course_id": "cvm302",
                            "pre_req_all": "",
                            "pre_req_any": "mat261, mat271",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "mathematics"
                        }
                    ],
                "science":
                    [
                        {
                            "name": "Chemistry", 
                            "sem1_course_id": "sci321", 
                            "sem2_course_id": "sci322",
                            "pre_req_all": "",
                            "pre_req_any": "mat611, mat615",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "Physics", 
                            "sem1_course_id": "sci421", 
                            "sem2_course_id": "sci422",
                            "pre_req_all": "",
                            "pre_req_any": "mat611, mat615",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "AP Biology", 
                            "sem1_course_id": "sci281", 
                            "sem2_course_id": "sci282",
                            "pre_req_all": "",
                            "pre_req_any": "sci231, sci271",
                            "recommended_pre_req": "sci321",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "AP Chemistry", 
                            "sem1_course_id": "sci381", 
                            "sem2_course_id": "sci382",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "mat261, sci321",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "AP Environmental Science", 
                            "sem1_course_id": "sci541", 
                            "sem2_course_id": "sci542",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "mat241",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "AP Physics C", 
                            "sem1_course_id": "sci485", 
                            "sem2_course_id": "sci486",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "mat621",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        },
                        {
                            "name": "Oceanography", 
                            "sem1_course_id": "sci517", 
                            "sem2_course_id": "sci518",
                            "pre_req_all": "",
                            "pre_req_any": "sci231, sci271",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "Marine Science 1", 
                            "sem1_course_id": "sci611", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "Astronomy", 
                            "sem1_course_id": "sci701", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "false",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "science"
                        },
                        {
                            "name": "STEM Health Science", 
                            "sem1_course_id": "sci291", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "recommended_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "lab_science": "true",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "credit_category": "lab_science"
                        }
                    ],
                "cte_bm":
                    [
                        {   
                            "name": "Business & Marketing", 
                            "sem1_course_id": "cdx401", 
                            "sem2_course_id": "cdx402",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Sports & Entertainment Marketing", 
                            "sem1_course_id": "cdx413", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Retail Operations", 
                            "sem1_course_id": "cdx421", 
                            "sem2_course_id": "cdx422",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Personal Finance", 
                            "sem1_course_id": "cdx651", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "AP Statistics", 
                            "sem1_course_id": "cvm301", 
                            "sem2_course_id": "cvm302",
                            "pre_req_all": "",
                            "pre_req_any": "mat261, mat271",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "AP Microeconomics", 
                            "sem1_course_id": "cvs351", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "AP Macroeconomics", 
                            "sem1_course_id": "cvs353", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Leadership 1", 
                            "sem1_course_id": "cvx151", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Leadership 2", 
                            "sem1_course_id": "cvx153", 
                            "sem2_course_id": "cvx154",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Finance and Wealth Management", 
                            "sem1_course_id": "cvx657", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        }
                    ],
                "cte_it":
                    [
                        {   
                            "name": "AP Computer Science A", 
                            "sem1_course_id": "cdm911", 
                            "sem2_course_id": "cdm912",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Microsoft Office Specialist", 
                            "sem1_course_id": "cdx301", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Video Game Design", 
                            "sem1_course_id": "cdx905", 
                            "sem2_course_id": "cdx906",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        }
                    ],
                "cte_health":
                    [
                        {   
                            "name": "Biotechnology", 
                            "sem1_course_id": "cdc121", 
                            "sem2_course_id": "cdc122",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Anatomy & Physiology", 
                            "sem1_course_id": "cdc561", 
                            "sem2_course_id": "cdc562",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "cte_human":
                    [
                        {   
                            "name": "Food Science A", 
                            "sem1_course_id": "cdc721", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Family Health", 
                            "sem1_course_id": "cdh511", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "American Sign Language 1", 
                            "sem1_course_id": "cdl011", 
                            "sem2_course_id": "cdl012",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "American Sign Language 2", 
                            "sem1_course_id": "cdl021", 
                            "sem2_course_id": "cdl022",
                            "pre_req_all": "cdl011",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "American Sign Language 3", 
                            "sem1_course_id": "cdl031", 
                            "sem2_course_id": "cdl032",
                            "pre_req_all": "cdl021",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Teacher Education Academy 1", 
                            "sem1_course_id": "cdx221", 
                            "sem2_course_id": "cdx222",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Teacher Education Academy 2", 
                            "sem1_course_id": "cdx223", 
                            "sem2_course_id": "cdx224",
                            "pre_req_all": "cdx221",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Child Development 1", 
                            "sem1_course_id": "cdx501", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Culinary Arts 1", 
                            "sem1_course_id": "cvc731", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "Psychology", 
                            "sem1_course_id": "cvs551", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {   
                            "name": "AP Psychology", 
                            "sem1_course_id": "cvs561", 
                            "sem2_course_id": "cvs562",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "cte_tech_science":
                    [
                        {
                            "name": "Forensic Science", 
                            "sem1_course_id": "cdc821", 
                            "sem2_course_id": "cdc822",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Community Emergency Response", 
                            "sem1_course_id": "cvx211", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        }
                    ],
                "cte_tech_art":
                    [
                        {
                            "name": "Yearbook 1", 
                            "sem1_course_id": "cda151", 
                            "sem2_course_id": "cda152",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Video Production 1", 
                            "sem1_course_id": "cda201", 
                            "sem2_course_id": "cda202",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Video Production 2", 
                            "sem1_course_id": "cda203", 
                            "sem2_course_id": "cda204",
                            "pre_req_all": "cda201",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Graphic Design", 
                            "sem1_course_id": "cda361", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Technical Theater", 
                            "sem1_course_id": "cda511", 
                            "sem2_course_id": "cda512",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Art and Design", 
                            "sem1_course_id": "cva321", 
                            "sem2_course_id": "cva322",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Commercial Art", 
                            "sem1_course_id": "cva331", 
                            "sem2_course_id": "cva332",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "AP Art and Design", 
                            "sem1_course_id": "cva341", 
                            "sem2_course_id": "cva342",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Industrial Design - 3D Printing", 
                            "sem1_course_id": "cva371", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Photography 1", 
                            "sem1_course_id": "cva411", 
                            "sem2_course_id": "cva412",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Photography 2", 
                            "sem1_course_id": "cva413", 
                            "sem2_course_id": "cva414",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "cte_stem":
                    [
                        {
                            "name": "Intro to Engineering", 
                            "sem1_course_id": "cdm801", 
                            "sem2_course_id": "cdm802",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Principles of Engineering", 
                            "sem1_course_id": "cdm803", 
                            "sem2_course_id": "cdm804",
                            "pre_req_all": "cdm801",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Engineering Design and Development", 
                            "sem1_course_id": "cdm809", 
                            "sem2_course_id": "",
                            "pre_req_all": "cdm803",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "cte"
                        },
                        {
                            "name": "Aerospace Engineering", 
                            "sem1_course_id": "cdm807", 
                            "sem2_course_id": "",
                            "pre_req_all": "cdm801",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        }
                    ],
                "health_pe":
                    [
                        {
                            "name": "Physical Education 2", 
                            "sem1_course_id": "ped111", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Competitive PE", 
                            "sem1_course_id": "ped217", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "11",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Water Aquatics", 
                            "sem1_course_id": "ped311", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "ped111, hea511",
                            "grade_req": "11",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Team Sports", 
                            "sem1_course_id": "ped411", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Racquet & Net Sports", 
                            "sem1_course_id": "ped421", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Lifetime Sports", 
                            "sem1_course_id": "ped441", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Walking & Wellness 1", 
                            "sem1_course_id": "ped526", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Strength Training 1", 
                            "sem1_course_id": "ped551", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Strength Training 2", 
                            "sem1_course_id": "ped561", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        },
                        {
                            "name": "Womens Strength Training", 
                            "sem1_course_id": "ped553", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "pe"
                        }
                    ],
                "visual_perf_arts":
                    [
                        {
                            "name": "Art 1", 
                            "sem1_course_id": "art011", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Honors Art 1", 
                            "sem1_course_id": "art016", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Art 2", 
                            "sem1_course_id": "art241", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "art011, art016",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Honors Art 2", 
                            "sem1_course_id": "art243", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "art011, art016",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Art 3", 
                            "sem1_course_id": "art251", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "art011, art016",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Ceramics 1", 
                            "sem1_course_id": "art611", 
                            "sem2_course_id": "",
                            "pre_req_all": "",
                            "pre_req_any": "art011, art016",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        },
                        {
                            "name": "Ceramics 2", 
                            "sem1_course_id": "art621", 
                            "sem2_course_id": "",
                            "pre_req_all": "art611",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "art"
                        }
                    ],
                "world_lang":
                    [
                        {
                            "name": "American Sign Lang 1", 
                            "sem1_course_id": "cdl011", 
                            "sem2_course_id": "cdl012",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "American Sign Lang 2", 
                            "sem1_course_id": "cdl021", 
                            "sem2_course_id": "cdl022",
                            "pre_req_all": "cdl011",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "American Sign Lang 3", 
                            "sem1_course_id": "cdl031", 
                            "sem2_course_id": "cdl032",
                            "pre_req_all": "cdl021",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "true",
                            "credit_equivalency": "true",
                            "credit_category": "cte"
                        },
                        {
                            "name": "French 1", 
                            "sem1_course_id": "for111", 
                            "sem2_course_id": "for112",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "French 2", 
                            "sem1_course_id": "for121", 
                            "sem2_course_id": "for122",
                            "pre_req_all": "for111",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "French 3", 
                            "sem1_course_id": "for131", 
                            "sem2_course_id": "for132",
                            "pre_req_all": "for121",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "French 4", 
                            "sem1_course_id": "for141", 
                            "sem2_course_id": "for142",
                            "pre_req_all": "for131",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "AP French", 
                            "sem1_course_id": "for171", 
                            "sem2_course_id": "for172",
                            "pre_req_all": "for141",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Japanese 1", 
                            "sem1_course_id": "for311", 
                            "sem2_course_id": "for312",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Japanese 2", 
                            "sem1_course_id": "for321", 
                            "sem2_course_id": "for322",
                            "pre_req_all": "for311",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Japanese 3", 
                            "sem1_course_id": "for331", 
                            "sem2_course_id": "for332",
                            "pre_req_all": "for321",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Japanese 4", 
                            "sem1_course_id": "for341", 
                            "sem2_course_id": "for342",
                            "pre_req_all": "for331",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "AP Japanese", 
                            "sem1_course_id": "for371", 
                            "sem2_course_id": "for372",
                            "pre_req_all": "for341",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 1", 
                            "sem1_course_id": "for511", 
                            "sem2_course_id": "for512",
                            "pre_req_all": "",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 2", 
                            "sem1_course_id": "for521", 
                            "sem2_course_id": "for522",
                            "pre_req_all": "for511",
                            "pre_req_any": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "",
                            "ap_course": "",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 3", 
                            "sem1_course_id": "for531", 
                            "sem2_course_id": "for532",
                            "pre_req_all": "",
                            "pre_req_any": "for521",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "",
                            "ap_course": "",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "Spanish 4", 
                            "sem1_course_id": "for541", 
                            "sem2_course_id": "for542",
                            "pre_req_all": "",
                            "pre_req_any": "for531",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "",
                            "ap_course": "",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        },
                        {
                            "name": "AP Spanish", 
                            "sem1_course_id": "for571", 
                            "sem2_course_id": "for572",
                            "pre_req_all": "",
                            "pre_req_any": "for531",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "0.5",
                            "hw_time": "",
                            "honors_course" : "",
                            "ap_course": "true",
                            "elective": "",
                            "CADR": "true",
                            "dual_credit": "false",
                            "credit_equivalency": "false",
                            "credit_category": "world_lang"
                        }
                    ]
            },
            
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
            
            
        },
        {
            "school_id": "1012",
            "school_name": "Eastlake High School",
            "school_district_id": "101",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        {
            "school_id": "1013",
            "school_name": "Juanita High School",
            "school_district_id": "101",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        {
            "school_id": "1014",
            "school_name": "Lake Washington High School",
            "school_district_id": "101",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },

        {
            "school_id": "1021",
            "school_name": "Issaquah High School",
            "school_district_id": "102",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        {
            "school_id": "1022",
            "school_name": "Liberty High School",
            "school_district_id": "102",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        {
            "school_id": "1023",
            "school_name": "Skyline High School",
            "school_district_id": "102",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        
        {
            "school_id": "1031",
            "school_name": "Cedarcrest High School",
            "school_district_id": "103",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },

        {
            "school_id": "1041",
            "school_name": "Skyhomish High School",
            "school_district_id": "104",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },

        {
            "school_id": "1051",
            "school_name": "Mount Si High School",
            "school_district_id": "105",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        {
            "school_id": "1052",
            "school_name": "Two Rivers High School",
            "school_district_id": "105",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },

        {
            "school_id": "1061",
            "school_name": "Bothell High School",
            "school_district_id": "106",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        {
            "school_id": "1062",
            "school_name": "Inglemoor High School",
            "school_district_id": "106",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        {
            "school_id": "1063",
            "school_name": "North Creek High School",
            "school_district_id": "106",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        {
            "school_id": "1064",
            "school_name": "Woodinville High School",
            "school_district_id": "106",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },

        {
            "school_id": "1071",
            "school_name": "Monroe High School",
            "school_district_id": "107",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },

        {
            "school_id": "1081",
            "school_name": "Glacier Peak High School",
            "school_district_id": "108",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },

        {
            "school_id": "1091",
            "school_name": "Calvero Mid High School",
            "school_district_id": "109",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        {
            "school_id": "1092",
            "school_name": "Lake Stevens High School",
            "school_district_id": "109",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },

        {
            "school_id": "1101",
            "school_name": "Arlington High School",
            "school_district_id": "110",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        {
            "school_id": "1102",
            "school_name": "Weston High School",
            "school_district_id": "110",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },

        {
            "school_id": "1111",
            "school_name": "Granite Falls High School",
            "school_district_id": "111",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },
        {
            "school_id": "1112",
            "school_name": "Crossroads High School",
            "school_district_id": "111",
            "class9":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class10":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class11":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },

            "class12":
            {
                "english":
                    [

                    ],
                "social_studies":
                    [

                    ],
                "science":
                    [

                    ],
                "mathematics":
                    [

                    ],
                "cte_bm":
                    [

                    ],
                "cte_it":
                    [

                    ],
                "cte_health":
                    [

                    ],
                "cte_human":
                    [

                    ],
                "cte_tech_science":
                    [

                    ],
                "cte_tech_art":
                    [

                    ],
                "cte_stem":
                    [

                    ],
                "world_lang":
                    [

                    ],
                "health_pe":
                    [

                    ],
                "visual_perf_arts":
                    [

                    ]
            },
            "req_credits": 
            {
                "english":
                {
                    "name": "English",
                    "total_credits": 4.0
                },
        

                "soc1":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },
                
                "soc2":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },
                
                "soc3":
                {
                    "name": "Social Studies",
                    "total_credits": 1.0
                },

                "soc4":
                {
                    "name": "Social Studies",
                    "total_credits": 0.5
                },

                "mathematics":
                {
                    "name": "Mathematics",
                    "total_credits": 3.0
                },

                "lab_science":
                {
                    "name": "Lab Science",
                    "total_credits": 2.0
                },

                "science":
                {
                    "name": "Science",
                    "total_credits": 1.0
                },

                "cte":
                {
                    "name": "CTE",
                    "total_credits": 1.0
                },

                "world_lang":
                {
                    "name": "World Language",
                    "total_credits": 2.0
                },

                "health":
                {
                    "name": "Health",
                    "total_credits": 0.5
                },

                "pe":
                {
                    "name": "Phys. Ed.",
                    "total_credits": 1.5
                },

                "art":
                {
                    "name": "Fine Arts",
                    "total_credits": 2.0
                },
                
                "elective":
                {
                    "name": "elective",
                    "total_credits": 4.0
                }
            }   
        },

    ];
