import groq from "groq";

export const homePageQuery = groq`
    *[_type == 'home' && _id == 'home'][0]{
        ...,
        "latestBlogs": * [ _type == "blog" ] | order(coalesce(uploadedAt, _createdAt) desc)[0...3]{
                _id,
                    _createdAt,
                    title,
                    slug,
                    description,
                    heroImage,
                    author->{
                        _id,
                        authorName
                    },
                    category->{
                        _id,
                        label,
                        slug
                    },
                    uplodedAt
        },
        heroRightBlogs[] -> {
         ...,
          author ->,
          category -> 
        },
        categoryGroup[]{
            ...,
            categories[] ->{
                ...,
                "blogs": *[ _type == "blog" && category._ref == ^._id ] | order(coalesce(uplodedAt, _createdAt) desc)[0...10]{
                    _id,
                    _createdAt,
                    title,
                    slug,
                    description,
                    heroImage,
                    author->{
                        _id,
                        authorName
                    },
                    category->{
                        _id,
                        label,
                        slug
                    },
                    uplodedAt
                }
            },
        },
        newsBlogs[] -> {
          ...,
          author ->,
          category -> 
        },
    }
`;

export const aboutUspageQuery = groq`*[_type == 'aboutUs'][0]{
    ...,
}`;

export const blogsByCategoryQuery = groq`
    *[_type == 'blog' && category->slug.current == $categorySlug]{
        ...,
        author ->,
        category -> 
    }
`;

export const blogBySlugQuery = groq`
    *[_type == 'blog' && slug.current == $blogSlug][0]{
        ...,
        author ->,
        category ->,
        "recommended": *[
    _type == "blog" &&
    slug.current != $blogSlug
  ] | order(
    (category._ref == ^.category._ref) desc,
    coalesce(uplodedAt, _createdAt) desc
  )[0...4]{
    _id,
        title,
        author->,
        category->,
        slug,
        heroImage,
        uploadedAt,
        _updatedAt,
  },
    }
`;

export const blogCategoryBySlugQuery = groq`
    *[_type == 'blogCategory' && slug.current == $categorySlug][0]{
        ...,
    }
`;

export const calculatorsQuery = groq`
*[_type == 'calculator']{
    ...,
}
`;

export const calculatorPageQuery = groq`
*[_type == 'calculatorPage'][0]{
    ...,
    "calculatorList": *[_type == 'calculator']{
        _id,
        icon,
        calculatorName,
        description,
        slug,
    }
}
`;
export const calculatorBySlugQuery = groq`
    *[_type == 'calculator' && slug.current == $calculatorSlug][0]{
        ...,
    }
`;

export const settingsQuery = groq`
    *[_id == 'settings' && _type == 'settings'][0]{
        ...,
        "calculators": *[ _type == 'calculator']{
            _id,
            calculatorName,
            "slug": slug.current,
        },
        "topics": *[ _type == "blogCategory"]{
            _id,
            label,
            "slug": slug.current,
        },
    }
`;

export const blogCategoriesQuery = groq`
    *[_type == 'blogCategory']{
        ...,
    }
`;

export const blogAuthorsQuery = groq`
    *[_id == 'blogAuthor' && _type == 'blogAuthor']{
        ...,
    }
`;

export const blogCategoryPageQuery = groq`
    *[_type == 'blogCategoryPage'][0]{
        ...,
        recommandedBlogs[] -> {
            ...,
            author ->,
            category -> 
        },
        "category": *[_type == 'blogCategory' && slug.current == $categorySlug][0]{...,},
        "blogList": *[_type == 'blog' && category->slug.current == $categorySlug]{
            ...,
            category->,
            author->,
        },
        "otherCategories": *[ _type == 'blogCategory' && slug.current != $categorySlug]{
            ...,
            'blogCount': count(*[_type == 'blog' && references(^._id)])
        }
    }
`;

export const blogsQuery = groq`
    *[ _type == 'blog' ] | order(coalesce(uplodedAt, _createdAt) desc){
        ...,
        author ->,
        category -> 
    }
`;

export const contactPageQuery = groq`
    *[_type == 'contact_us' && _id == 'contact_us'][0]{
        ...,
    }
`;

export const siteMapQuery = groq`
    *[_type == 'blogCategory']{
        _id,
        "title": label,
        "slug": slug.current,
        "blogs": *[_type == "blog" && references(^._id)]{
            title,
            "slug": slug.current,
            "categorySlug": category->slug.current,
            _updatedAt
        },
    }
`;

export const privacyPolicyPageQuery = groq`
    *[ _type == 'privacyPolicy' && _type == "privacyPolicy"][0]{
        ...,
}
`;
export const disclaimerPageQuery = groq`
    *[ _type == 'disclaimer' && _type == "disclaimer"][0]{
        ...,
}
`;
export const tAndCPageQuery = groq`
    *[ _type == 'tAndC' && _type == "tAndC"][0]{
        ...,
}
`;
