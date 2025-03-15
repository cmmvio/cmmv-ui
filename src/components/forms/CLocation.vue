<template>
    <div class="c-location relative w-full">
        <label v-if="label" :for="id"
            class="c-location-label text-sm"
            :class="[{
                'absolute transition-all duration-200 ease-in-out pointer-events-none drop-shadow-xs': floatingLabel,
                'c-location-label--active': floatingLabel && (isActive || currentInput),
                'top-[50%] -translate-y-1/2 left-1': floatingLabel && (!isActive && !currentInput),
                'top-[30%]': floatingLabel && !isActive && hasError,
                'pl-10': hasIcon && floatingLabel && (!isActive && !currentInput),
                'block mb-1': !floatingLabel
            },
            textColor ? textColor : 'text-neutral-500 dark:text-neutral-400',
            !disabled && floatingLabel ? (bgColor ? bgColor : variantColors[variant]) : '']">
            {{ label }} <span v-if="required" class="text-red-500">*</span>
        </label>

        <div class="relative flex items-center">
            <!-- Location Icon -->
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 z-30">
                <slot name="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="textColor ? textColor : 'text-neutral-500 dark:text-neutral-400'" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
                </slot>
            </div>

            <input :id="id" type="text"
                :class="[sizes[size], roundedStyles[rounded], variantStyles[variant],
                (bgColor ? bgColor : variantColors[variant]),
                textColor,
                { 'ring-red-500 ring-2': hasError, 'opacity-50': disabled, 'cursor-not-allowed': disabled, 'pl-10': true },
                { 'pt-4': floatingLabel, 'pb-3': true, 'pt-3': true },
                'min-h-[38px]']"
                class="c-location-field block w-full shadow-sm outline-none"
                :placeholder="floatingLabel ? (isActive ? (placeholder || '') : '') : ((placeholder || '') + (required && placeholder ? ' *' : ''))"
                :value="currentInput" @input="handleInput"
                @change="handleInput" @focus="activateLabel" @blur="deactivateLabel" @keydown="handleKeyDown"
                :disabled="disabled"
                :aria-invalid="hasError" />

            <button v-if="clearable && currentInput" type="button"
                class="absolute inset-y-0 right-0 flex items-center px-2 text-neutral-400 hover:text-neutral-600"
                @click="clearInput">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <transition name="fade">
            <div v-if="isActive && isFocus && predictions.length > 0"
                class="absolute z-50 w-full bg-white border border-neutral-300 dark:bg-neutral-800 dark:border-neutral-900 mt-2 max-h-60 overflow-auto shadow-lg rounded-md">
                <ul>
                    <li v-for="(prediction, index) in predictions" :key="usingGoogleMaps ? (prediction as GooglePlacePrediction).place_id : 'osm-' + (prediction as NominatimResult).place_id"
                        @click="selectPrediction(prediction)"
                        :class="{ 'bg-neutral-200 dark:bg-neutral-900': keyboardSelectedIndex === index }"
                        class="px-4 py-2 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900 text-sm">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-neutral-500 dark:text-neutral-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>
                            <div class="flex-1 overflow-hidden">
                                <!-- Google Maps result -->
                                <div v-if="usingGoogleMaps">
                                    <div class="font-medium">{{ (prediction as GooglePlacePrediction).structured_formatting.main_text }}</div>
                                    <div class="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                                        {{ (prediction as GooglePlacePrediction).structured_formatting.secondary_text }}
                                    </div>
                                </div>
                                <!-- OpenStreetMap (Nominatim) result -->
                                <div v-else>
                                    <div class="font-medium">{{ formatNominatimMainText(prediction as NominatimResult) }}</div>
                                    <div class="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                                        {{ formatNominatimSecondaryText(prediction as NominatimResult) }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </transition>

        <div class="mt-1" v-if="!hiddenHint">
            <p v-if="hasError" class="text-xs text-red-500">{{ errorMessage }}</p>
            <p v-else-if="hint && (hintFixed || isActive)" class="text-xs text-neutral-500">{{ hint }}</p>
            <p v-else-if="!usingGoogleMaps" class="text-xs italic text-neutral-500">
                Using OpenStreetMap Nominatim
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, defineExpose, watch, onMounted, onUnmounted } from 'vue';

// Declaração simplificada para o Google Maps API
declare global {
  interface Window {
    google: any;
  }
}

// Interfaces para trabalhar com os dados de localização
interface GooglePlacePrediction {
    description: string;
    place_id: string;
    reference: string;
    structured_formatting: {
        main_text: string;
        secondary_text: string;
    };
    terms: { offset: number; value: string }[];
    types: string[];
}

interface PlaceDetails {
    address_components: {
        long_name: string;
        short_name: string;
        types: string[];
    }[];
    formatted_address: string;
    geometry: {
        location: {
            lat: () => number;
            lng: () => number;
        };
    };
    place_id: string;
}

// Interface para os resultados da API Nominatim (OpenStreetMap)
interface NominatimResult {
    place_id: string;
    osm_id: number;
    osm_type: string;
    display_name: string;
    lat: string;
    lon: string;
    boundingbox: string[];
    address: {
        house_number?: string;
        road?: string;
        suburb?: string;
        neighbourhood?: string;
        city?: string;
        town?: string;
        village?: string;
        municipality?: string;
        county?: string;
        state?: string;
        state_district?: string;
        region?: string;
        postcode?: string;
        country?: string;
        country_code?: string;
        [key: string]: string | undefined;
    };
}

interface LocationValue {
    placeId: string;
    description: string;
    formattedAddress?: string;
    latitude?: number;
    longitude?: number;
    addressComponents?: Record<string, string>;
    provider?: 'google' | 'osm'; // Indica qual provedor de geocodificação foi usado
}

const props = defineProps({
    modelValue: {
        type: Object as () => LocationValue | null,
        default: null,
    },
    label: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        required: false,
        default: "Search for a location",
    },
    size: {
        type: String,
        default: "md",
    },
    rounded: {
        type: String,
        default: "default",
    },
    variant: {
        type: String,
        default: "default",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    clearable: {
        type: Boolean,
        default: true,
    },
    hint: {
        type: String,
        required: false,
        default: null,
    },
    hintFixed: {
        type: Boolean,
        default: false
    },
    hiddenHint: {
        type: Boolean,
        default: false,
    },
    id: {
        type: String,
        required: false,
        default: "location-autocomplete",
    },
    bgColor: {
        type: String,
        required: false,
        default: "bg-white dark:bg-neutral-900",
    },
    textColor: {
        type: String,
        required: false,
        default: "",
    },
    borderColor: {
        type: String,
        required: false,
        default: "focus:ring focus:ring-neutral-700 focus:ring-opacity-50",
    },
    rules: {
        type: Array,
        default: () => []
    },
    floatingLabel: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    },
    country: {
        type: String,
        required: false,
        default: "",
    },
    types: {
        type: Array as () => string[],
        default: () => ['geocode'],
    },
    componentRestrictions: {
        type: Object,
        default: () => ({}),
    },
    fetchDetails: {
        type: Boolean,
        default: true,
    },
    debounceTimeout: {
        type: Number,
        default: 300,
    },
    preferGoogle: {
        type: Boolean,
        default: false,
        description: "Whether to prefer using Google Maps API over OpenStreetMap (Nominatim)"
    }
});

const emit = defineEmits(["update:modelValue", "place-changed", "no-results-found", "error"]);

const hasIcon = ref(true);
const currentValue = ref<LocationValue | null>(props.modelValue);
const currentInput = ref("");
const isActive = ref(false);
const isFocus = ref(false);
const changed = ref(false);
const errorMessage = ref<string | null>(null);
const keyboardSelectedIndex = ref(-1);
const predictions = ref<GooglePlacePrediction[] | NominatimResult[]>([]);
const autocompleteService = ref<any>(null);
const placesService = ref<any>(null);
const sessionToken = ref<any>(null);
const debounceTimer = ref<number | null>(null);
const usingGoogleMaps = ref(false);
let mapDiv: HTMLDivElement;

onMounted(() => {
    initServices();
});

onUnmounted(() => {
    if (mapDiv && document.body.contains(mapDiv)) {
        document.body.removeChild(mapDiv);
    }

    // Cleanup any event listeners or other resources
    if (debounceTimer.value) {
        window.clearTimeout(debounceTimer.value);
    }
});

// Funções para formatar resultados de endereço do Nominatim em formato mais simples
const formatNominatimMainText = (prediction: NominatimResult): string => {
    const address = prediction.address;

    // Componentes principais de um endereço
    const houseNumber = address.house_number || '';
    const road = address.road || '';
    const neighbourhood = address.neighbourhood || address.suburb || '';

    // Se temos número e rua, mostramos como endereço principal
    if (road) {
        return houseNumber
            ? `${houseNumber} ${road}`
            : road;
    }

    // Caso não haja número e rua, vamos para a localidade
    const locality = address.city || address.town || address.village || address.municipality || '';

    // Se tiver localidade, mostramos ela
    if (locality) {
        return locality;
    }

    // Último recurso: mostramos o início do display_name
    return prediction.display_name.split(',')[0];
};

const formatNominatimSecondaryText = (prediction: NominatimResult): string => {
    const address = prediction.address;

    const locality = address.city || address.town || address.village || address.municipality || '';
    const district = address.county || address.state_district || '';
    const region = address.state || address.region || '';
    const country = address.country || '';

    const parts: string[] = [];

    // Componentes secundários do endereço
    if (locality && !formatNominatimMainText(prediction).includes(locality)) {
        parts.push(locality);
    }

    if (district && district !== locality) {
        parts.push(district);
    }

    if (region && !parts.includes(region)) {
        parts.push(region);
    }

    if (country) {
        parts.push(country);
    }

    return parts.join(', ');
};

const initServices = () => {
    try {
        // Modificado: Agora preferimos OpenStreetMap por padrão, Google Maps apenas se explicitamente solicitado
        if (props.preferGoogle && window.google && window.google.maps && window.google.maps.places) {
            initGoogleServices();
            usingGoogleMaps.value = true;
        } else {
            // Se não preferir Google Maps ou o Google Maps não estiver disponível, use OSM (não é necessária inicialização)
            usingGoogleMaps.value = false;
            console.log('Using OpenStreetMap (Nominatim) as the geocoding provider');

            // Se tivermos um modelValue, inicialize a entrada
            if (props.modelValue) {
                currentInput.value = props.modelValue.description || '';
            }
        }
    } catch (error) {
        console.error('Error initializing location services:', error);
        emit('error', error);
    }
};

const initGoogleServices = () => {
    try {
        // Create a hidden div for the PlacesService (requires a DOM element)
        mapDiv = document.createElement('div');
        mapDiv.style.display = 'none';
        document.body.appendChild(mapDiv);

        autocompleteService.value = new window.google.maps.places.AutocompleteService();
        placesService.value = new window.google.maps.places.PlacesService(mapDiv);
        sessionToken.value = new window.google.maps.places.AutocompleteSessionToken();

        // If we have a modelValue, initialize the input
        if (props.modelValue) {
            currentInput.value = props.modelValue.description || '';
        }
    } catch (error) {
        console.error('Error initializing Google Places services:', error);
        emit('error', error);
    }
};

watch(() => props.modelValue, (newValue) => {
    if (newValue) {
        currentValue.value = newValue;
        currentInput.value = newValue.description || '';
    } else {
        currentValue.value = null;
        currentInput.value = '';
    }
});

const sizes: Record<string, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-2 py-1 text-sm",
    lg: "px-2 py-2 text-base",
};

const roundedStyles: Record<string, string> = {
    none: "rounded-none",
    default: "rounded-md",
    full: "rounded-full",
};

const variantStyles: Record<string, string> = {
    default: "border border-neutral-300 dark:border-neutral-900",
    outlined: "border-2 border-neutral-700",
    filled: "border-1 border-neutral-900 shadow-md",
};

const variantColors: Record<string, string> = {
    default: "bg-neutral-200 dark:bg-neutral-900 text-neutral-950 dark:text-white",
    outlined: "bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white",
    filled: "bg-neutral-200 dark:bg-neutral-800 text-neutral-950 dark:text-white",
};

const hasError = computed(() => !!errorMessage.value);

const handleKeyDown = (event: KeyboardEvent) => {
    // Handle arrow key navigation in dropdown
    if (!predictions.value.length || !isFocus.value) return;

    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault();
            if (keyboardSelectedIndex.value < predictions.value.length - 1) {
                keyboardSelectedIndex.value++;
            } else {
                keyboardSelectedIndex.value = 0;
            }
            break;
        case 'ArrowUp':
            event.preventDefault();
            if (keyboardSelectedIndex.value > 0) {
                keyboardSelectedIndex.value--;
            } else {
                keyboardSelectedIndex.value = predictions.value.length - 1;
            }
            break;
        case 'Enter':
            event.preventDefault();
            if (keyboardSelectedIndex.value >= 0 && keyboardSelectedIndex.value < predictions.value.length) {
                selectPrediction(predictions.value[keyboardSelectedIndex.value]);
            }
            break;
        case 'Escape':
            event.preventDefault();
            predictions.value = [];
            deactivateLabel();
            break;
    }
};

const handleInput = (event: Event) => {
    const input = (event.target as HTMLInputElement).value;
    currentInput.value = input;

    // If input is empty, clear predictions
    if (!input) {
        predictions.value = [];
        currentValue.value = null;
        emit("update:modelValue", null);
        return;
    }

    // Debounce the API call
    if (debounceTimer.value) {
        window.clearTimeout(debounceTimer.value);
    }

    debounceTimer.value = window.setTimeout(() => {
        fetchPredictions(input);
    }, props.debounceTimeout);

    if (!validate() || !changed.value) {
        errorMessage.value = null;
    }

    changed.value = true;
    isActive.value = true;
};

const fetchPredictions = (input: string) => {
    if (usingGoogleMaps.value) {
        fetchGooglePredictions(input);
    } else {
        fetchNominatimPredictions(input);
    }
};

const fetchGooglePredictions = (input: string) => {
    if (!autocompleteService.value || !input) {
        predictions.value = [];
        return;
    }

    // Create request object
    const request: any = {
        input,
        sessionToken: sessionToken.value,
    };

    // Add country restriction if provided
    if (props.country) {
        request.componentRestrictions = { country: props.country };
    } else if (props.componentRestrictions) {
        request.componentRestrictions = props.componentRestrictions;
    }

    // Add types if provided
    if (props.types && props.types.length > 0) {
        request.types = props.types;
    }

    // Make the API call
    autocompleteService.value.getPlacePredictions(
        request,
        (results: GooglePlacePrediction[] | null, status: string) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                predictions.value = results;
                keyboardSelectedIndex.value = -1;
            } else {
                predictions.value = [];
                if (status === window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    emit('no-results-found', input);
                } else {
                    console.error('Error fetching place predictions:', status);
                    emit('error', new Error(`Error fetching place predictions: ${status}`));
                }
            }
        }
    );
};

const fetchNominatimPredictions = async (input: string) => {
    if (!input) {
        predictions.value = [];
        return;
    }

    try {
        // Build the URL for the Nominatim API
        let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&addressdetails=1&limit=5`;

        // Add country restriction if provided
        if (props.country) {
            url += `&countrycodes=${props.country.toLowerCase()}`;
        }

        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'CLocationComponent' // Nominatim requires a User-Agent
            }
        });

        if (!response.ok) {
            throw new Error(`Nominatim API error: ${response.status}`);
        }

        const results: NominatimResult[] = await response.json();

        if (results && results.length > 0) {
            predictions.value = results;
            keyboardSelectedIndex.value = -1;
        } else {
            predictions.value = [];
            emit('no-results-found', input);
        }
    } catch (error) {
        console.error('Error fetching Nominatim predictions:', error);
        emit('error', error);
        predictions.value = [];
    }
};

const selectPrediction = (prediction: GooglePlacePrediction | NominatimResult) => {
    if (usingGoogleMaps.value) {
        selectGooglePrediction(prediction as GooglePlacePrediction);
    } else {
        selectNominatimPrediction(prediction as NominatimResult);
    }
};

const selectGooglePrediction = (prediction: GooglePlacePrediction) => {
    // Atualizar o campo de entrada com a formatação simplificada
    const mainText = prediction.structured_formatting.main_text;
    const secondaryText = prediction.structured_formatting.secondary_text;
    const simpleAddress = `${mainText}, ${secondaryText}`;

    // Usar o formato simplificado em vez do description completo
    currentInput.value = simpleAddress;

    // Criar valor de localização base
    const locationValue: LocationValue = {
        placeId: prediction.place_id,
        description: simpleAddress, // Usar o endereço simplificado aqui também
        formattedAddress: prediction.description, // Manter o endereço completo aqui
        provider: 'google'
    };

    // Se fetchDetails estiver habilitado, obtenha detalhes adicionais do local
    if (props.fetchDetails && placesService.value) {
        placesService.value.getDetails(
            {
                placeId: prediction.place_id,
                fields: ['address_components', 'formatted_address', 'geometry'],
                sessionToken: sessionToken.value,
            },
            (place: PlaceDetails | null, status: string) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
                    // Obter os detalhes do local
                    const placeDetails = place as PlaceDetails;

                    // Adicionar endereço formatado
                    locationValue.formattedAddress = placeDetails.formatted_address;

                    // Adicionar coordenadas
                    if (placeDetails.geometry && placeDetails.geometry.location) {
                        locationValue.latitude = placeDetails.geometry.location.lat();
                        locationValue.longitude = placeDetails.geometry.location.lng();
                    }

                    // Adicionar componentes de endereço estruturados
                    if (placeDetails.address_components) {
                        locationValue.addressComponents = {};

                        placeDetails.address_components.forEach(component => {
                            component.types.forEach(type => {
                                locationValue.addressComponents![type] = component.long_name;
                                // Adicionar nome curto para país e áreas administrativas
                                if (['country', 'administrative_area_level_1', 'administrative_area_level_2'].includes(type)) {
                                    locationValue.addressComponents![`${type}_short`] = component.short_name;
                                }
                            });
                        });
                    }

                    // Atualizar o modelo e emitir eventos
                    currentValue.value = locationValue;
                    emit("update:modelValue", locationValue);
                    emit("place-changed", locationValue);
                } else {
                    console.error('Error fetching place details:', status);
                    emit('error', new Error(`Error fetching place details: ${status}`));

                    // Ainda atualiza com informações básicas mesmo se os detalhes falharem
                    currentValue.value = locationValue;
                    emit("update:modelValue", locationValue);
                    emit("place-changed", locationValue);
                }
            }
        );
    } else {
        // Atualizar modelo apenas com as informações básicas de predição
        currentValue.value = locationValue;
        emit("update:modelValue", locationValue);
        emit("place-changed", locationValue);
    }

    // Limpar previsões e atualizar o estado da interface
    predictions.value = [];
    isActive.value = true;
    isFocus.value = false;

    // Criar um novo token de sessão para a próxima pesquisa
    if (sessionToken.value) {
        sessionToken.value = new window.google.maps.places.AutocompleteSessionToken();
    }

    // Validar a seleção
    if (!validate() || !changed.value) {
        errorMessage.value = null;
    }
    changed.value = true;
};

const selectNominatimPrediction = (prediction: NominatimResult) => {
    // Criar um endereço mais simples para exibição e armazenamento
    const mainText = formatNominatimMainText(prediction);
    const secondaryText = formatNominatimSecondaryText(prediction);
    const simpleAddress = secondaryText ? `${mainText}, ${secondaryText}` : mainText;

    // Update input field with the simplified address
    currentInput.value = simpleAddress;

    // Create location value from Nominatim result
    const locationValue: LocationValue = {
        placeId: `osm-${prediction.place_id}`,
        description: simpleAddress,
        formattedAddress: prediction.display_name, // Mantém o endereço completo no formattedAddress
        latitude: parseFloat(prediction.lat),
        longitude: parseFloat(prediction.lon),
        provider: 'osm',
        addressComponents: {}
    };

    // Add address components if available
    if (prediction.address) {
        // Criar um objeto temporário para armazenar os componentes de endereço com tipos corretos
        const addressComponents: Record<string, string> = {};

        // Converter todas as propriedades para string, descartando undefined
        Object.entries(prediction.address).forEach(([key, value]) => {
            if (value !== undefined) {
                addressComponents[key] = value;
            }
        });

        locationValue.addressComponents = addressComponents;

        // Add some compatibility mappings for Google-style address components
        if (prediction.address.country) {
            locationValue.addressComponents['country'] = prediction.address.country;
            locationValue.addressComponents['country_short'] = prediction.address.country_code?.toUpperCase() || '';
        }

        if (prediction.address.state) {
            locationValue.addressComponents['administrative_area_level_1'] = prediction.address.state;
            locationValue.addressComponents['administrative_area_level_1_short'] = prediction.address.state;
        }

        if (prediction.address.city) {
            locationValue.addressComponents['locality'] = prediction.address.city;
        } else if (prediction.address.town) {
            locationValue.addressComponents['locality'] = prediction.address.town;
        } else if (prediction.address.village) {
            locationValue.addressComponents['locality'] = prediction.address.village;
        }

        if (prediction.address.road) {
            locationValue.addressComponents['route'] = prediction.address.road;
        }

        if (prediction.address.house_number) {
            locationValue.addressComponents['street_number'] = prediction.address.house_number;
        }

        if (prediction.address.postcode) {
            locationValue.addressComponents['postal_code'] = prediction.address.postcode;
        }
    }

    // Update the model and emit events
    currentValue.value = locationValue;
    emit("update:modelValue", locationValue);
    emit("place-changed", locationValue);

    // Clear predictions and update UI state
    predictions.value = [];
    isActive.value = true;
    isFocus.value = false;

    // Validate the selection
    if (!validate() || !changed.value) {
        errorMessage.value = null;
    }
    changed.value = true;
};

const clearInput = () => {
    currentInput.value = "";
    currentValue.value = null;
    errorMessage.value = null;
    isActive.value = false;
    isFocus.value = false;
    predictions.value = [];
    emit("update:modelValue", null);
};

const validateShowError = () => {
    errorMessage.value = null;

    if (!changed.value) return false;

    for (const rule of props.rules) {
        //@ts-ignore
        const error = rule(currentValue.value);

        if (error)
            errorMessage.value = error;
    }
};

const validate = () => {
    errorMessage.value = null;

    for (const rule of props.rules) {
        //@ts-ignore
        const error = rule(currentValue.value);

        if (error) {
            validateShowError();
            return true;
        }
    }

    return false;
};

const activateLabel = () => {
    isActive.value = true;
    isFocus.value = true;
};

const deactivateLabel = () => {
    setTimeout(() => {
        isFocus.value = false;
        keyboardSelectedIndex.value = -1;
        if (!currentValue.value && !currentInput.value) {
            isActive.value = false;
        }
    }, 100);
};

defineExpose({
    value: currentValue,
    clearInput,
    validate,
});
</script>

<style scoped>
.c-location {
    position: relative;
}

.c-location ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 0.375rem;
}

.c-location ul li {
    transition: background-color 0.2s;
    list-style: none;
    margin: 0;
}

.c-location-label {
    z-index: 1;
}

/* Apenas aplicado quando floatingLabel=true */
.c-location-label--active {
    transform: translate(0, -2rem) scale(0.85);
    top: 1.3rem;
    left: 0.3rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>
