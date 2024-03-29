toc.dat                                                                                             0000600 0004000 0002000 00000027602 14533717452 0014461 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP       $                     {            mcc #   14.9 (Ubuntu 14.9-0ubuntu0.22.04.1) #   14.9 (Ubuntu 14.9-0ubuntu0.22.04.1) '    :           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false         ;           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false         <           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false         =           1262    16384    mcc    DATABASE     X   CREATE DATABASE mcc WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_ZA.UTF-8';
    DROP DATABASE mcc;
                postgres    false                     2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false         >           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3         �            1259    24576    member    TABLE     '  CREATE TABLE public.member (
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
    DROP TABLE public.member;
       public         heap    postgres    false    3         �            1259    24590    member_member_id_seq    SEQUENCE     �   CREATE SEQUENCE public.member_member_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.member_member_id_seq;
       public          postgres    false    3    209         ?           0    0    member_member_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.member_member_id_seq OWNED BY public.member.member_id;
          public          postgres    false    210         �            1259    24600    membership_history    TABLE     �   CREATE TABLE public.membership_history (
    history_id integer NOT NULL,
    member_id integer NOT NULL,
    membership_type integer NOT NULL,
    start_date date,
    end_date date,
    payment integer
);
 &   DROP TABLE public.membership_history;
       public         heap    postgres    false    3         �            1259    24599 !   membership_history_history_id_seq    SEQUENCE     �   CREATE SEQUENCE public.membership_history_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.membership_history_history_id_seq;
       public          postgres    false    3    212         @           0    0 !   membership_history_history_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.membership_history_history_id_seq OWNED BY public.membership_history.history_id;
          public          postgres    false    211         �            1259    24612    membership_type    TABLE     �   CREATE TABLE public.membership_type (
    membership_type_id integer NOT NULL,
    member_type character varying,
    price real,
    duration integer
);
 #   DROP TABLE public.membership_type;
       public         heap    postgres    false    3         �            1259    24611 &   membership_type_membership_type_id_seq    SEQUENCE     �   CREATE SEQUENCE public.membership_type_membership_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public.membership_type_membership_type_id_seq;
       public          postgres    false    3    214         A           0    0 &   membership_type_membership_type_id_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public.membership_type_membership_type_id_seq OWNED BY public.membership_type.membership_type_id;
          public          postgres    false    213         �            1259    24626    payment    TABLE     w   CREATE TABLE public.payment (
    pop_id integer NOT NULL,
    pop_filepath character varying,
    upload_date date
);
    DROP TABLE public.payment;
       public         heap    postgres    false    3         �            1259    24625    payment_pop_id_seq    SEQUENCE     �   CREATE SEQUENCE public.payment_pop_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.payment_pop_id_seq;
       public          postgres    false    3    216         B           0    0    payment_pop_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.payment_pop_id_seq OWNED BY public.payment.pop_id;
          public          postgres    false    215         �           2604    24591    member member_id    DEFAULT     t   ALTER TABLE ONLY public.member ALTER COLUMN member_id SET DEFAULT nextval('public.member_member_id_seq'::regclass);
 ?   ALTER TABLE public.member ALTER COLUMN member_id DROP DEFAULT;
       public          postgres    false    210    209         �           2604    24603    membership_history history_id    DEFAULT     �   ALTER TABLE ONLY public.membership_history ALTER COLUMN history_id SET DEFAULT nextval('public.membership_history_history_id_seq'::regclass);
 L   ALTER TABLE public.membership_history ALTER COLUMN history_id DROP DEFAULT;
       public          postgres    false    212    211    212         �           2604    24615 "   membership_type membership_type_id    DEFAULT     �   ALTER TABLE ONLY public.membership_type ALTER COLUMN membership_type_id SET DEFAULT nextval('public.membership_type_membership_type_id_seq'::regclass);
 Q   ALTER TABLE public.membership_type ALTER COLUMN membership_type_id DROP DEFAULT;
       public          postgres    false    213    214    214         �           2604    24629    payment pop_id    DEFAULT     p   ALTER TABLE ONLY public.payment ALTER COLUMN pop_id SET DEFAULT nextval('public.payment_pop_id_seq'::regclass);
 =   ALTER TABLE public.payment ALTER COLUMN pop_id DROP DEFAULT;
       public          postgres    false    215    216    216         0          0    24576    member 
   TABLE DATA           �   COPY public.member (name, surname, username, password, email, phone_number, admin, membership, active, latest_payment, student_number, id_number, foreign_student, gender, member_id, membership_type, start_date, end_date) FROM stdin;
    public          postgres    false    209       3376.dat 3          0    24600    membership_history 
   TABLE DATA           s   COPY public.membership_history (history_id, member_id, membership_type, start_date, end_date, payment) FROM stdin;
    public          postgres    false    212       3379.dat 5          0    24612    membership_type 
   TABLE DATA           [   COPY public.membership_type (membership_type_id, member_type, price, duration) FROM stdin;
    public          postgres    false    214       3381.dat 7          0    24626    payment 
   TABLE DATA           D   COPY public.payment (pop_id, pop_filepath, upload_date) FROM stdin;
    public          postgres    false    216       3383.dat C           0    0    member_member_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.member_member_id_seq', 7, true);
          public          postgres    false    210         D           0    0 !   membership_history_history_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.membership_history_history_id_seq', 1, false);
          public          postgres    false    211         E           0    0 &   membership_type_membership_type_id_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public.membership_type_membership_type_id_seq', 4, true);
          public          postgres    false    213         F           0    0    payment_pop_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.payment_pop_id_seq', 1, false);
          public          postgres    false    215         �           2606    24598    member member_pk 
   CONSTRAINT     U   ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_pk PRIMARY KEY (member_id);
 :   ALTER TABLE ONLY public.member DROP CONSTRAINT member_pk;
       public            postgres    false    209         �           2606    24605 (   membership_history membership_history_pk 
   CONSTRAINT     n   ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_pk PRIMARY KEY (history_id);
 R   ALTER TABLE ONLY public.membership_history DROP CONSTRAINT membership_history_pk;
       public            postgres    false    212         �           2606    24619 "   membership_type membership_type_pk 
   CONSTRAINT     p   ALTER TABLE ONLY public.membership_type
    ADD CONSTRAINT membership_type_pk PRIMARY KEY (membership_type_id);
 L   ALTER TABLE ONLY public.membership_type DROP CONSTRAINT membership_type_pk;
       public            postgres    false    214         �           2606    24633    payment payment_pk 
   CONSTRAINT     T   ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pk PRIMARY KEY (pop_id);
 <   ALTER TABLE ONLY public.payment DROP CONSTRAINT payment_pk;
       public            postgres    false    216         �           2606    40960    member member_payment_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_payment_fk FOREIGN KEY (latest_payment) REFERENCES public.payment(pop_id);
 B   ALTER TABLE ONLY public.member DROP CONSTRAINT member_payment_fk;
       public          postgres    false    3231    209    216         �           2606    24606 (   membership_history membership_history_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_fk FOREIGN KEY (member_id) REFERENCES public.member(member_id);
 R   ALTER TABLE ONLY public.membership_history DROP CONSTRAINT membership_history_fk;
       public          postgres    false    209    212    3225         �           2606    24620 *   membership_history membership_history_fk_1    FK CONSTRAINT     �   ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_fk_1 FOREIGN KEY (membership_type) REFERENCES public.membership_type(membership_type_id);
 T   ALTER TABLE ONLY public.membership_history DROP CONSTRAINT membership_history_fk_1;
       public          postgres    false    212    214    3229         �           2606    40985 0   membership_history membership_history_payment_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_payment_fk FOREIGN KEY (payment) REFERENCES public.payment(pop_id);
 Z   ALTER TABLE ONLY public.membership_history DROP CONSTRAINT membership_history_payment_fk;
       public          postgres    false    216    212    3231         �           2606    40990    member membership_type_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.member
    ADD CONSTRAINT membership_type_fk FOREIGN KEY (membership_type) REFERENCES public.membership_type(membership_type_id);
 C   ALTER TABLE ONLY public.member DROP CONSTRAINT membership_type_fk;
       public          postgres    false    3229    209    214                                                                                                                                      3376.dat                                                                                            0000600 0004000 0002000 00000000165 14533717452 0014271 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        Bob	Dylan	bob		bob.dylan@yourmom.com	0826661234	\N	\N	\N	\N	00000	12345	false	student	7	1	2024-01-01	2024-12-31
\.


                                                                                                                                                                                                                                                                                                                                                                                                           3379.dat                                                                                            0000600 0004000 0002000 00000000005 14533717452 0014265 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           3381.dat                                                                                            0000600 0004000 0002000 00000000050 14533717452 0014256 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	student	500	12
2	external	600	12
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        3383.dat                                                                                            0000600 0004000 0002000 00000000005 14533717452 0014260 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           restore.sql                                                                                         0000600 0004000 0002000 00000024022 14533717452 0015377 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)

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

DROP DATABASE mcc;
--
-- Name: mcc; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE mcc WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_ZA.UTF-8';


ALTER DATABASE mcc OWNER TO postgres;

\connect mcc

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
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: member; Type: TABLE; Schema: public; Owner: postgres
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


ALTER TABLE public.member OWNER TO postgres;

--
-- Name: member_member_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.member_member_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.member_member_id_seq OWNER TO postgres;

--
-- Name: member_member_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.member_member_id_seq OWNED BY public.member.member_id;


--
-- Name: membership_history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.membership_history (
    history_id integer NOT NULL,
    member_id integer NOT NULL,
    membership_type integer NOT NULL,
    start_date date,
    end_date date,
    payment integer
);


ALTER TABLE public.membership_history OWNER TO postgres;

--
-- Name: membership_history_history_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.membership_history_history_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.membership_history_history_id_seq OWNER TO postgres;

--
-- Name: membership_history_history_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.membership_history_history_id_seq OWNED BY public.membership_history.history_id;


--
-- Name: membership_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.membership_type (
    membership_type_id integer NOT NULL,
    member_type character varying,
    price real,
    duration integer
);


ALTER TABLE public.membership_type OWNER TO postgres;

--
-- Name: membership_type_membership_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.membership_type_membership_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.membership_type_membership_type_id_seq OWNER TO postgres;

--
-- Name: membership_type_membership_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.membership_type_membership_type_id_seq OWNED BY public.membership_type.membership_type_id;


--
-- Name: payment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payment (
    pop_id integer NOT NULL,
    pop_filepath character varying,
    upload_date date
);


ALTER TABLE public.payment OWNER TO postgres;

--
-- Name: payment_pop_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.payment_pop_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payment_pop_id_seq OWNER TO postgres;

--
-- Name: payment_pop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.payment_pop_id_seq OWNED BY public.payment.pop_id;


--
-- Name: member member_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.member ALTER COLUMN member_id SET DEFAULT nextval('public.member_member_id_seq'::regclass);


--
-- Name: membership_history history_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.membership_history ALTER COLUMN history_id SET DEFAULT nextval('public.membership_history_history_id_seq'::regclass);


--
-- Name: membership_type membership_type_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.membership_type ALTER COLUMN membership_type_id SET DEFAULT nextval('public.membership_type_membership_type_id_seq'::regclass);


--
-- Name: payment pop_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment ALTER COLUMN pop_id SET DEFAULT nextval('public.payment_pop_id_seq'::regclass);


--
-- Data for Name: member; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.member (name, surname, username, password, email, phone_number, admin, membership, active, latest_payment, student_number, id_number, foreign_student, gender, member_id, membership_type, start_date, end_date) FROM stdin;
\.
COPY public.member (name, surname, username, password, email, phone_number, admin, membership, active, latest_payment, student_number, id_number, foreign_student, gender, member_id, membership_type, start_date, end_date) FROM '$$PATH$$/3376.dat';

--
-- Data for Name: membership_history; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.membership_history (history_id, member_id, membership_type, start_date, end_date, payment) FROM stdin;
\.
COPY public.membership_history (history_id, member_id, membership_type, start_date, end_date, payment) FROM '$$PATH$$/3379.dat';

--
-- Data for Name: membership_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.membership_type (membership_type_id, member_type, price, duration) FROM stdin;
\.
COPY public.membership_type (membership_type_id, member_type, price, duration) FROM '$$PATH$$/3381.dat';

--
-- Data for Name: payment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.payment (pop_id, pop_filepath, upload_date) FROM stdin;
\.
COPY public.payment (pop_id, pop_filepath, upload_date) FROM '$$PATH$$/3383.dat';

--
-- Name: member_member_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.member_member_id_seq', 7, true);


--
-- Name: membership_history_history_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.membership_history_history_id_seq', 1, false);


--
-- Name: membership_type_membership_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.membership_type_membership_type_id_seq', 4, true);


--
-- Name: payment_pop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.payment_pop_id_seq', 1, false);


--
-- Name: member member_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_pk PRIMARY KEY (member_id);


--
-- Name: membership_history membership_history_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_pk PRIMARY KEY (history_id);


--
-- Name: membership_type membership_type_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.membership_type
    ADD CONSTRAINT membership_type_pk PRIMARY KEY (membership_type_id);


--
-- Name: payment payment_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pk PRIMARY KEY (pop_id);


--
-- Name: member member_payment_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_payment_fk FOREIGN KEY (latest_payment) REFERENCES public.payment(pop_id);


--
-- Name: membership_history membership_history_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_fk FOREIGN KEY (member_id) REFERENCES public.member(member_id);


--
-- Name: membership_history membership_history_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_fk_1 FOREIGN KEY (membership_type) REFERENCES public.membership_type(membership_type_id);


--
-- Name: membership_history membership_history_payment_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.membership_history
    ADD CONSTRAINT membership_history_payment_fk FOREIGN KEY (payment) REFERENCES public.payment(pop_id);


--
-- Name: member membership_type_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT membership_type_fk FOREIGN KEY (membership_type) REFERENCES public.membership_type(membership_type_id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              