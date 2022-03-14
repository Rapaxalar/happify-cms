import { useQuery, gql } from '@apollo/client';
import useLocale from 'hooks/useLocale';

export const mapFrontToBack = ({ fields, locale }) => {
    const result = {};
    return fields.reduce((acc, field) => ({ ...acc, [field.id]: field.value }), {});
};

export const mapBackToFront = ({ fields, locale }) => {
    const getTranslation = (value) => value && value[locale];
    return [
        {
            id: 'originalImageTranslations',
            label: 'Original Image (Crop Template)',
            type: 'image',
            value: getTranslation(fields.originalImageTranslations)
        },
        {
            id: 'happifierType',
            label: 'Happifier Type',
            type: 'select',
            value: fields.happifierType,
            options: ['video', 'audio', 'image', 'article-science', 'quote']
        },
        {
            id: 'humanUrl',
            label: 'Human Url',
            type: 'input',
            value: fields.humanUrl
        },
        {
            id: 'titleTranslations',
            label: 'Title',
            type: 'input',
            value: getTranslation(fields.titleTranslations)
        },
        {
            id: 'subtitleTranslations',
            label: 'Subtitle',
            type: 'input',
            value: getTranslation(fields.subtitleTranslations)
        },
        {
            id: 'imageTranslations',
            label: 'Image',
            type: 'image',
            value: getTranslation(fields.imageTranslations)
        },
        {
            id: 'isEnabled',
            label: 'Is Enabled',
            type: 'checkbox',
            value: fields.isEnabled
        },
        {
            id: 'isSponsored',
            label: 'Is Sponsored',
            type: 'checkbox',
            value: fields.isSponsored
        },
        {
            id: 'isFeatured',
            label: 'Is Featured',
            type: 'checkbox',
            value: fields.isFeatured
        },
        {
            id: 'isPromoted',
            label: 'Is Promoted',
            type: 'checkbox',
            value: fields.isPromoted
        },
        {
            id: 'bodyTranslations',
            label: 'Body',
            type: 'textarea',
            value: fields.bodyTranslations[locale]
        }
    ];
};

export const useHappifierQuery = (id) => {
    const { loading, error, data } = useQuery(gql`{
          happifierById(id: ${id}) {
              id
              happifierType
              humanUrl
              titleTranslations
              subtitleTranslations
              imageTranslations
              isEnabled
              isSponsored
              isFeatured
              isPromoted
              bodyTranslations
              originalImageTranslations
        }
    }`);
    const locale = useLocale();
    const fields = data?.happifierById;
    const formFields = fields ? mapBackToFront({ fields, locale }) : {};
    return { loading, error, formFields };
};
