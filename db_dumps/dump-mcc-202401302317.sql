--
-- PostgreSQL database dump
--

-- Dumped from database version 14.10 (Ubuntu 14.10-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.10 (Ubuntu 14.10-0ubuntu0.22.04.1)

-- Started on 2024-01-30 23:17:21 SAST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 3389 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 24576)
-- Name: member; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.member (
    name character varying,
    surname character varying,
    username character varying,
    password character varying,
    email character varying,
    phone_number character varying,
    admin boolean,
    membership integer,
    active boolean,
    latest_payment integer,
    student_number character varying,
    id_number character varying,
    foreign_student character varying,
    gender character varying,
    member_id integer NOT NULL,
    membership_type integer,
    start_date date,
    end_date date
);


--
-- TOC entry 210 (class 1259 OID 24590)
-- Name: member_member_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.member_member_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3390 (class 0 OID 0)
-- Dependencies: 210
-- Name: member_member_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.member_member_id_seq OWNED BY public.member.member_id;


--
-- TOC entry 212 (class 1259 OID 24600)
-- Name: membership_history; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.membership_history (
    history_id integer NOT NULL,
    member_id integer NOT NULL,
    membership_type integer NOT NULL,
    start_date date,
    end_date date,
    payment integer
);


--
-- TOC entry 211 (class 1259 OID 24599)
-- Name: membership_history_history_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.membership_history_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3391 (class 0 OID 0)
-- Dependencies: 211
-- Name: membership_history_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.membership_history_history_id_seq OWNED BY public.membership_history.history_id;


--
-- TOC entry 214 (class 1259 OID 24612)
-- Name: membership_type; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.membership_type (
    membership_type_id integer NOT NULL,
    member_type character varying,
    price real,
    duration integer
);


--
-- TOC entry 213 (class 1259 OID 24611)
-- Name: membership_type_membership_type_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.membership_type_membership_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3392 (class 0 OID 0)
-- Dependencies: 213
-- Name: membership_type_membership_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.membership_type_membership_type_id_seq OWNED BY public.membership_type.membership_type_id;


--
-- TOC entry 216 (class 1259 OID 24626)
-- Name: payment; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.payment (
    pop_id integer NOT NULL,
    filepath character varying,
    upload_date date,
    filename character varying
);


--
-- TOC entry 215 (class 1259 OID 24625)
-- Name: payment_pop_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.payment_pop_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3393 (class 0 OID 0)
-- Dependencies: 215
-- Name: payment_pop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.payment_pop_id_seq OWNED BY public.payment.pop_id;


--
-- TOC entry 3220 (class 2604 OID 24591)
-- Name: member member_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.member ALTER COLUMN member_id SET DEFAULT nextval('public.member_member_id_seq'::regclass);


--
-- TOC entry 3221 (class 2604 OID 24603)
-- Name: membership_history history_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.membership_history ALTER COLUMN history_id SET DEFAULT nextval('public.membership_history_history_id_seq'::regclass);


--
-- TOC entry 3222 (class 2604 OID 24615)
-- Name: membership_type membership_type_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.membership_type ALTER COLUMN membership_type_id SET DEFAULT nextval('public.membership_type_membership_type_id_seq'::regclass);


--
-- TOC entry 3223 (class 2604 OID 24629)
-- Name: payment pop_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payment ALTER COLUMN pop_id SET DEFAULT nextval('public.payment_pop_id_seq'::regclass);


--
-- TOC entry 3376 (class 0 OID 24576)
-- Dependencies: 209
-- Data for Name: member; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.member (name, surname, username, password, email, phone_number, admin, membership, active, latest_payment, student_number, id_number, foreign_student, gender, member_id, membership_type, start_date, end_date) FROM stdin;
sean	chater	hello		hello@world.co.za	1234566	\N	\N	\N	7	22665145	000000000	false	student	24	1	2024-01-01	2024-01-02
iben	swharts	ekse		ekse@email.com	183712973	\N	\N	\N	8	12345678	99999	true	external	25	2	2024-01-01	2024-01-02
beni	low	dfasdff		adslfkjasdflj	123213	\N	\N	\N	9	123757	234324980	false	student	26	1	2024-01-01	2024-01-02
\.


--
-- TOC entry 3379 (class 0 OID 24600)
-- Dependencies: 212
-- Data for Name: membership_history; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.membership_history (history_id, member_id, membership_type, start_date, end_date, payment) FROM stdin;
\.


--
-- TOC entry 3381 (class 0 OID 24612)
-- Dependencies: 214
-- Data for Name: membership_type; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.membership_type (membership_type_id, member_type, price, duration) FROM stdin;
1	student	500	12
2	external	600	12
\.


--
-- TOC entry 3383 (class 0 OID 24626)
-- Dependencies: 216
-- Data for Name: payment; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.payment (pop_id, filepath, upload_date, filename) FROM stdin;
7	student-account	2024-01-30	22665145
8	../pop/2024-01-30-iben-swharts	2024-01-30	2024-01-30-iben-swharts
9	../pop/2024-01-30-beni-low	2024-01-30	2024-01-30-beni-low
\.


--
-- TOC entry 3394 (class 0 OID 0)
-- Dependencies: 210
-- Name: member_member_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.member_member_id_seq', 26, true);


--
-- TOC entry 3395 (class 0 OID 0)
-- Dependencies: 211
-- Name: membership_history_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.membership_history_history_id_seq', 1, false);


--
-- TOC entry 3396 (class 0 OID 0)
-- Dependencies: 213
-- Name: membership_type_membership_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.membership_type_membership_type_id_seq', 4, true);


--
-- TOC entry 3397 (class 0 OID 0)
-- Dependencies: 215
-- Name: payment_pop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.payment_pop_id_seq', 9, true);


--
-- TOC entry 3225 (class 2606 OID 24598)
-- Name: member member_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_pk PRIMARY KEY (member_id);


--
-- TOC entry 3227 (class 2606 OID 24605)
-- Name: membership_history membership_history_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_pk PRIMARY KEY (history_id);


--
-- TOC entry 3229 (class 2606 OID 24619)
-- Name: membership_type membership_type_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.membership_type
    ADD CONSTRAINT membership_type_pk PRIMARY KEY (membership_type_id);


--
-- TOC entry 3231 (class 2606 OID 24633)
-- Name: payment payment_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pk PRIMARY KEY (pop_id);


--
-- TOC entry 3232 (class 2606 OID 40960)
-- Name: member member_payment_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_payment_fk FOREIGN KEY (latest_payment) REFERENCES public.payment(pop_id);


--
-- TOC entry 3234 (class 2606 OID 24606)
-- Name: membership_history membership_history_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_fk FOREIGN KEY (member_id) REFERENCES public.member(member_id);


--
-- TOC entry 3235 (class 2606 OID 24620)
-- Name: membership_history membership_history_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_fk_1 FOREIGN KEY (membership_type) REFERENCES public.membership_type(membership_type_id);


--
-- TOC entry 3236 (class 2606 OID 40985)
-- Name: membership_history membership_history_payment_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_payment_fk FOREIGN KEY (payment) REFERENCES public.payment(pop_id);


--
-- TOC entry 3233 (class 2606 OID 40990)
-- Name: member membership_type_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT membership_type_fk FOREIGN KEY (membership_type) REFERENCES public.membership_type(membership_type_id);


-- Completed on 2024-01-30 23:17:22 SAST

--
-- PostgreSQL database dump complete
--

